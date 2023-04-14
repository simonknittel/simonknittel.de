import clsx from "clsx";
import { type Metadata } from "next";
import Link from "next/link";
import Technology from "./_components/Technology";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Simon Knittel - Full-Stack Developer",
};

export default function Page() {
  return (
    <div className="h-full bg-gradient-radial from-neutral-800 to-black text-white overflow-hidden relative">
      <div
        className={clsx(
          styles.container,
          "h-full flex items-center justify-center text-center bg-center bg-no-repeat"
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

          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xl mt-4 max-w-xs md:max-w-none mx-auto">
            <li className="list-none">
              <Link
                href="https://github.com/simonknittel"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                GitHub
              </Link>
            </li>

            <li className="list-disc">
              <Link
                href="https://mastodon.social/@simonknittel"
                className="border-b border-b-white hover:border-b-sky-500"
                rel="me"
              >
                Mastodon
              </Link>
            </li>

            <li className="list-disc">
              <Link
                href="https://twitter.com/simknittel"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                Twitter
              </Link>
            </li>

            <li className="md:list-disc">
              <Link
                href="https://www.linkedin.com/in/simonknittel/"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                LinkedIn
              </Link>
            </li>

            <li className="list-disc">
              <Link
                href="https://www.xing.com/profile/Simon_Knittel/"
                className="border-b border-b-white hover:border-b-sky-500"
              >
                Xing
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Technology className="2xl:-left-64 2xl:-top-96">Blender</Technology>
          <Technology className="2xl:left-64 2xl:-top-96">Next.js</Technology>
          <Technology className="2xl:left-[40rem]">React</Technology>
          <Technology className="2xl:left-64 2xl:top-96">Terraform</Technology>
          <Technology className="2xl:-left-64 2xl:top-96">
            TypeScript
          </Technology>
          <Technology className="2xl:-left-[40rem]">Unity</Technology>
        </div>
      </div>
    </div>
  );
}
