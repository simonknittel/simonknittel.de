import clsx from "clsx";
import { type Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Simon Knittel - Full-Stack Developer",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-radial from-slate-800 to-black text-white">
      <div
        className={clsx(
          styles.container,
          "min-h-screen flex items-center justify-center text-center"
        )}
      >
        <div className={clsx(styles.text, "p-4")}>
          <h1 className="text-6xl lg:text-8xl font-extrabold">Simon Knittel</h1>

          <h2 className="text-2xl mt-4">
            Full-Stack Developer @{" "}
            <Link
              href="https://www.hmmh.de/"
              className="border-b border-b-white hover:border-b-sky-500"
            >
              hmmh
            </Link>
          </h2>

          <ul className="flex flex-wrap gap-x-6 justify-center text-xl mt-4 list-disc">
            <li className="list-none">
              <Link
                href="https://github.com/simonknittel"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                GitHub
              </Link>
            </li>

            <li>
              <Link
                href="https://mastodon.social/@simonknittel"
                className="border-b border-b-white hover:border-b-sky-500"
                rel="me"
              >
                Mastodon
              </Link>
            </li>

            <li>
              <Link
                href="https://twitter.com/simknittel"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                Twitter
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/simonknittel/"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href="https://www.xing.com/profile/Simon_Knittel/"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                Xing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
