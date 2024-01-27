import clsx from "clsx";
import slugify from "slugify";
import { env } from "~/env.mjs";
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
  const sectionSlug = slugify(sectionHeading, { lower: true, strict: true });
  const url = `${env.BASE_URL}/blog/post/${postSlug}#${sectionSlug}`;

  return (
    <h2 className={clsx(className)} id={sectionSlug}>
      {sectionHeading}

      <SectionLink url={url}>#</SectionLink>
    </h2>
  );
};
