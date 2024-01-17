import Link from "next/link";
import { Photo } from "~/app/_components/modules/Hero/Photo";

interface Props {
  disableBlog?: boolean;
}

const Header = ({ disableBlog = false }: Readonly<Props>) => {
  return (
    <header className="px-2 text-lg">
      <div className="flex justify-between max-w-3xl mx-auto">
        <div className="flex gap-2 items-center">
          <Photo size="small" />

          <p className="py-4 font-extrabold drop-shadow-xl animate-rgb bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Simon Knittel
          </p>
        </div>

        <nav>
          <ul className="flex gap-2">
            <li>
              <Link
                href="/"
                className="hover:opacity-50 py-4 block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100"
              >
                Home
              </Link>
            </li>

            {!disableBlog && (
              <li>
                <Link
                  href="/blog"
                  className="hover:opacity-50 py-4 block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                >
                  Blog
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
