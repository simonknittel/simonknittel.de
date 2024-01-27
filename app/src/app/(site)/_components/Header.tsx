import { Photo } from "~/app/_components/modules/Hero/Photo";
import { InlineLink } from "../blog/post/_components/InlineLink";

interface Props {
  disableBlog?: boolean;
}

const Header = ({ disableBlog = false }: Readonly<Props>) => {
  return (
    <header className="px-4 text-lg">
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
              <InlineLink href="/" className="block py-4" theme="neutral">
                Home
              </InlineLink>
            </li>

            {!disableBlog && (
              <li>
                <InlineLink href="/blog" className="block py-4">
                  Blog
                </InlineLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
