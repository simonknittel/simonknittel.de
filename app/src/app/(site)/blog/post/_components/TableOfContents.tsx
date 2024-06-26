import clsx from "clsx";
import { InlineLink } from "./InlineLink";

interface Props {
  className?: string;
  links: Record<string, string>;
}

const TableOfContents = ({ className, links }: Readonly<Props>) => {
  return (
    <div
      className={clsx(
        className,
        "max-w-lg w-full rounded border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-white p-4 lg:p-8 text-lg mt-6 lg:mt-12",
      )}
    >
      <p className="font-bold">Table of contents</p>

      <ol className="list-decimal list-outside mt-2 pl-5 ">
        {Object.entries(links).map(([href, title], index) => (
          <li key={index} className="[&+li]:mt-2">
            <InlineLink
              href={href}
              theme="neutralUnderlined"
              className="inline"
            >
              {title}
            </InlineLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContents;
