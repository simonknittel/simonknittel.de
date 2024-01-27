import clsx from "clsx";
import { InlineLink } from "../blog/post/_components/InlineLink";

interface Props {
  className?: string;
  disableBlog?: boolean;
}

export const Footer = ({ className, disableBlog = false }: Readonly<Props>) => {
  return (
    <footer className={clsx(className, "px-4 max-w-3xl mx-auto py-4")}>
      <div className="h-[2px] bg-neutral-300 dark:bg-neutral-700 max-w-32 mx-auto" />

      <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center max-w-xs md:max-w-none mx-auto mt-4">
        {!disableBlog && <FooterLink href="/blog">Blog</FooterLink>}

        <FooterLink href="https://github.com/simonknittel">GitHub</FooterLink>

        <FooterLink href="https://mastodon.social/@simonknittel">
          Mastodon
        </FooterLink>

        <FooterLink href="https://twitter.com/simknittel">Twitter</FooterLink>

        <FooterLink href="https://www.linkedin.com/in/simonknittel/">
          LinkedIn
        </FooterLink>

        {/* <FooterLink href="https://www.xing.com/profile/Simon_Knittel/">
          Xing
        </FooterLink> */}

        {/* <FooterLink href="https://www.instagram.com/simonknittel/">
          Instagram
        </FooterLink> */}

        <FooterLink href="https://www.buymeacoffee.com/simonknittel">
          Buy Me A Coffee
        </FooterLink>
      </ul>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <li>
      <InlineLink href={href} theme="neutral">
        {children}
      </InlineLink>
    </li>
  );
};
