import Link from "next/link";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] bg-neutral-800 text-white">
      <header className="flex justify-between max-w-3xl mx-auto px-2">
        <p className="py-2">Simon Knittel</p>

        <nav>
          <ul className="flex gap-2">
            <li>
              <Link href="/" className="py-2 px-2 block">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="py-2 px-2 block underline underline-offset-4"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}
