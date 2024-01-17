import clsx from "clsx";
import InlineLink from "./InlineLink";

interface Props {
  className?: string;
  links: Record<string, string>;
}

const TableOfContents = ({ className, links }: Readonly<Props>) => {
  return (
    <div
      className={clsx(
        className,
        "rounded bg-neutral-900 text-white p-4 lg:p-8 mx-auto text-lg",
      )}
    >
      <p className="font-bold">Table of contents</p>

      <ol className="list-decimal list-inside mt-2">
        {Object.entries(links).map(([href, title], index) => (
          <li key={index}>
            <InlineLink href={href}>{title}</InlineLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContents;
