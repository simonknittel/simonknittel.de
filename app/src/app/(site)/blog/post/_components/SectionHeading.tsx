import clsx from "clsx";
import { merriweather } from "~/app/fonts";
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
    <h2 className={clsx(className)} id={sectionSlug}>
      <span className={merriweather.className}>{sectionHeading}</span>

      <SectionLink url={url}>#</SectionLink>
    </h2>
  );
};
