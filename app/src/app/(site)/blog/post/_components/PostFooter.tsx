import clsx from "clsx";
import { BsChevronLeft } from "react-icons/bs";
import { InlineLink } from "./InlineLink";

type Props = Readonly<{
  className?: string;
  socialLinks?: Array<[string, string]>;
}>;

export const PostFooter = ({ className, socialLinks = [] }: Props) => {
  return (
    <footer
      className={clsx(
        className,
        "w-full max-w-3xl flex flex-col items-center mt-4 lg:mt-12",
      )}
    >
      {socialLinks.length > 0 && (
        <div className="flex gap-2 mb-4">
          <p>Discuss this post on:</p>

          {socialLinks.map(([name, url]) => (
            <InlineLink key={url} href={url} theme="neutralUnderlined">
              {name}
            </InlineLink>
          ))}
        </div>
      )}

      <InlineLink
        href="/blog"
        className="inline-flex gap-1 items-center py-2"
        theme="neutralUnderlined"
      >
        <BsChevronLeft /> All posts
      </InlineLink>
    </footer>
  );
};
