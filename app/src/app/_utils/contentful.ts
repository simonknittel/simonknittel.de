import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import { env } from "~/env.mjs";

const getClient = () => {
  return createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export const getPage = async (slug: string) => {
  const client = getClient();

  const entries = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    include: 10,
  });
  if (!entries.items[0]) return null;

  const page = entries.items[0].fields;

  const data = page.modules
    .map((module) => {
      const id = module.sys.id;
      const type = module.sys.contentType.sys.id.replace(/^module/, "");

      const rtn = {
        id,
        type,
      };

      if (type === "Hero") {
        Object.entries(module.fields).map(([fieldId, field]) => {
          if (fieldId === "description") {
            rtn[fieldId] = documentToReactComponents(field);
          } else if (fieldId === "links") {
            rtn[fieldId] = field.map((link) => {
              return {
                ...link.fields,
                children: link.fields.displayName,
              };
            });
          } else {
            rtn[fieldId] = field;
          }
        });
      } else {
        console.warn(
          `Contentful provided a module (ID: ${id}) whose type (${type}) is unknown to our transpiler.`
        );

        return null;
      }

      return rtn;
    })
    .filter((module) => module !== null);

  return data;
};
