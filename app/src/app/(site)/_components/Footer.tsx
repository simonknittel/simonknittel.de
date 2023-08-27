import clsx from "clsx";
import Link from "next/link";

interface Props {
  className?: string;
  disableBlog?: boolean;
}

const Footer = ({ className, disableBlog = false }: Props) => {
  return (
    <footer className={clsx(className, "px-2")}>
      <div className="max-w-3xl mx-auto border-t-4 border-t-neutral-500 py-4">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xl max-w-xs md:max-w-none mx-auto">
          {!disableBlog && (
            <li>
              <Link
                href="/blog"
                className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
              >
                Blog
              </Link>
            </li>
          )}

          <li>
            <Link
              href="https://github.com/simonknittel"
              className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              GitHub
            </Link>
          </li>

          <li>
            <Link
              href="https://mastodon.social/@simonknittel"
              className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
              rel="me"
            >
              Mastodon
            </Link>
          </li>

          <li>
            <Link
              href="https://twitter.com/simknittel"
              className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Twitter
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/simonknittel/"
              className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              LinkedIn
            </Link>
          </li>

          <li>
            <Link
              href="https://www.xing.com/profile/Simon_Knittel/"
              className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Xing
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/simonknittel/"
              className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
