import clsx from "clsx";
import slugify from "slugify";

interface Props {
  className?: string;
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const SectionHeading = ({ className, text, level }: Readonly<Props>) => {
  const slug = slugify(text, { lower: true, strict: true });

  return (
    <h2 className={clsx(className)} id={slug}>
      {text}

      <a
        className="text-black dark:text-neutral-300 opacity-50 hover:opacity-100 transition-opacity relative bottom-[-2px] px-2"
        href={`#${slug}`}
      >
        #
      </a>
    </h2>
  );
};
