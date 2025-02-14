import clsx from "clsx";
import Link from "next/link";
import {
  SiBlender,
  SiNextdotjs,
  SiReact,
  SiTerraform,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import styles from "./Hero.module.css";
import { Photo } from "./Photo";
import Technology from "./Technology";

interface Props {
  disableBlog?: boolean;
}

const Hero = ({ disableBlog = false }: Readonly<Props>) => {
  return (
    <div className="h-[100dvh] bg-neutral-950 text-white overflow-hidden relative">
      <div
        className={clsx(
          styles.container,
          "h-[100dvh] flex items-center justify-center text-center bg-center bg-no-repeat relative z-10",
        )}
      >
        <div className="p-4">
          <div className="flex flex-col gap-2 items-center">
            <Photo />

            <h1 className="text-6xl lg:text-8xl font-extrabold drop-shadow-xl animate-rgb bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Simon Knittel
            </h1>
          </div>

          <h2 className="text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100">
            Full-Stack Developer @{" "}
            <Link
              href="https://www.hmmh.de/"
              className="inline-block"
              prefetch={false}
            >
              <span className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500">
                hmmh
              </span>
            </Link>
          </h2>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xl mt-4 max-w-xs md:max-w-none mx-auto">
            {!disableBlog && (
              <li>
                <Link
                  href="/blog"
                  className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                  prefetch={false}
                >
                  Blog
                </Link>
              </li>
            )}

            <li>
              <Link
                href="https://github.com/simonknittel"
                className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                prefetch={false}
              >
                GitHub
              </Link>
            </li>

            <li>
              <Link
                href="https://mastodon.social/@simonknittel"
                className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                rel="me"
                prefetch={false}
              >
                Mastodon
              </Link>
            </li>

            <li>
              <Link
                href="https://bsky.app/profile/simonknittel.de"
                className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                prefetch={false}
              >
                Bluesky
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/simonknittel/"
                className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                prefetch={false}
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Technology className="2xl:-left-64 2xl:-top-96">
            <SiBlender /> Blender
          </Technology>

          <Technology className="2xl:left-64 2xl:-top-96">
            <SiNextdotjs /> Next.js
          </Technology>

          <Technology className="2xl:left-[40rem]">
            <SiReact />
            React
          </Technology>

          <Technology className="2xl:left-64 2xl:top-96">
            <SiTerraform /> Terraform
          </Technology>

          <Technology className="2xl:-left-64 2xl:top-96">
            <SiTypescript /> TypeScript
          </Technology>

          <Technology className="2xl:-left-[40rem]">
            <SiUnity /> Unity / C#
          </Technology>
        </div>
      </div>

      {/* <Globe
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[512px] w-[3072px]"
        width={3072}
        height={512}
      /> */}
    </div>
  );
};

export default Hero;
