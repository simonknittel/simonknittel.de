import clsx from "clsx";
import slugify from "slugify";

interface Props {
  className?: string;
  text: string;
}

export const SectionHeading = ({ className, text }: Readonly<Props>) => {
  const slug = slugify(text, { lower: true, strict: true });

  return (
    <h2 className={clsx(className)} id={slug}>
      {text}

      <a
        className="text-black dark:text-neutral-300 opacity-30 hover:opacity-100 transition-opacity relative bottom-[-1px] px-2 inline-block"
        href={`#${slug}`}
      >
        #
      </a>
    </h2>
  );
};
