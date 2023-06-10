import Link from "next/link";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] bg-neutral-800 text-white">
      <header className="px-2">
        <div className="flex justify-between max-w-3xl mx-auto">
          <p className="py-2">Simon Knittel</p>

          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/" className="p-2 block">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="p-2 block underline underline-offset-4"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}
