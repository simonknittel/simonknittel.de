import clsx from "clsx";
import { env } from "~/env.mjs";
import { slugify } from "~/lib/slugify";
import { SectionLink } from "./SectionLink";

interface Props {
  className?: string;
  sectionHeading: string;
  postSlug: string;
}

export const SectionHeading = ({
  className,
  sectionHeading,
  postSlug,
}: Readonly<Props>) => {
  const sectionSlug = slugify(sectionHeading);
  const url = `${env.BASE_URL}/blog/post/${postSlug}#${sectionSlug}`;

  return (
    <h2 className={clsx(className, "font-serif")} id={sectionSlug}>
      {sectionHeading}

      <SectionLink url={url}>#</SectionLink>
    </h2>
  );
};
