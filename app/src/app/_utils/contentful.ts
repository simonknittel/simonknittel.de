// TODO: Fix types

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  createClient,
  type BaseEntry,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
} from "contentful";
import { cache } from "react";
import { env } from "~/env.mjs";
import { type ModulesRendererProps } from "../_components/ModulesRenderer";
import { type HeroProps } from "../_components/modules/Hero/Hero";

type LinkEntrySkeleton = BaseEntry & {
  contentTypeId: "link";
  fields: {
    internalName: EntryFieldTypes.Text;
    displayName: EntryFieldTypes.Text;
    href: EntryFieldTypes.Text;
    rel: EntryFieldTypes.Text;
  };
};

type ModuleHeroEntrySkeleton = BaseEntry & {
  contentTypeId: "moduleHero";
  fields: {
    internalName: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<LinkEntrySkeleton>>;
    technologies: EntryFieldTypes.Text;
  };
};

type PageEntrySkeleton = BaseEntry & {
  contentTypeId: "page";
  fields: {
    internalName: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    modules: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ModuleHeroEntrySkeleton>
    >;
  };
};

const getClient = () => {
  return createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
  }).withoutUnresolvableLinks;
};

export const getContentfulPage = cache(async (slug: string) => {
  const client = getClient();

  const entries = await client.getEntries<PageEntrySkeleton>({
    content_type: "page",
    "fields.slug": slug,
    include: 10,
    order: ["-sys.updatedAt"],
    limit: 1,
  });

  if (!entries.items[0]) return null;

  return entries.items[0].fields;
});

// Types which are returned by `entries.items[0].fields.modules`
type KnownModuleEntry = Entry<
  ModuleHeroEntrySkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
type UnknownModuleEntry = Entry<
  EntrySkeletonType,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;

export const transformContentfulPageModulesToModuleRenderer = (
  modules: (KnownModuleEntry | UnknownModuleEntry | undefined)[]
): ModulesRendererProps["data"] => {
  const [knownModules, unknownModules] = modules
    .filter((module): module is KnownModuleEntry | UnknownModuleEntry =>
      Boolean(module)
    )
    .reduce(
      (result, module) => {
        if (
          ["Hero"].includes(
            module.sys.contentType.sys.id.replace(/^module/, "")
          )
        ) {
          result[0].push(module);
        } else {
          result[1].push(module);
        }

        return result;
      },
      [[] as KnownModuleEntry[], [] as UnknownModuleEntry[]]
    );

  if (unknownModules.length > 0) {
    console.warn(
      `Contentful provided modules whose types are unknown to our transpiler.`,
      unknownModules
    );
  }

  const transformedEntries = knownModules.map((module) => {
    const type = module.sys.contentType.sys.id.replace(/^module/, "");

    const props =
      type === "Hero" ? transformModuleHeroFields(module.fields) : {};

    return {
      id: module.sys.id,
      type,
      props,
    };
  });

  return transformedEntries;
};

function transformModuleHeroFields(
  fields: ModuleHeroEntrySkeleton["fields"]
): HeroProps {
  const rtn: HeroProps = {
    name: "",
    description: "",
    links: [],
    technologies: [],
  };

  Object.entries(fields).forEach(([fieldId, field]) => {
    switch (fieldId) {
      case "description":
        rtn[fieldId] = documentToReactComponents(field);
        break;

      case "links":
        rtn[fieldId] = field.map((link) => {
          return {
            ...link.fields,
            children: link.fields.displayName,
          };
        });
        break;

      default:
        rtn[fieldId] = field;
        break;
    }
  });

  return rtn;
}
