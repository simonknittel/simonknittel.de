import clsx from "clsx";
import Link from "next/link";
import { getFooter } from "~/app/_lib/contentful";

interface Props {
  className?: string;
}

const Footer = async ({ className }: Props) => {
  const data = await getFooter();

  return (
    <footer className={clsx(className, "px-2")}>
      <div className="max-w-3xl mx-auto border-t-4 border-t-neutral-500 py-4">
        {data && data.links.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xl max-w-xs md:max-w-none mx-auto">
            {data.links.map(({ fields: { href, rel, displayName } }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                  rel={rel}
                >
                  {displayName}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};

export default Footer;
