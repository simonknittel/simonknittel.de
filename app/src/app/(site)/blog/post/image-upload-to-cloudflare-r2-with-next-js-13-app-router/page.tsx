import { type Metadata } from "next";
import Link from "next/link";
import { SiNextdotjs, SiPrisma } from "react-icons/si";
import Header from "../_components/header/Header";
import imageSrc from "./image.jpg";

// TODO: Add open graph image

export const metadata: Metadata = {
  title:
    "Image upload to Cloudflare R2 with Next.js 13 App Router - Blog | Simon Knittel",
};

export default function Page() {
  return (
    <>
      <Header
        date={new Date("2023-06-30")}
        tags={[
          <>
            <SiNextdotjs /> Next.js
          </>,
          <>
            <SiPrisma /> Prisma
          </>,
        ]}
        imageSrc={imageSrc}
      >
        Image upload to Cloudflare R2 with Next.js 13 App Router
      </Header>

      <p className="font-bold w-full max-w-3xl text-lg">TODO: Introduction</p>

      <div className="w-full max-w-3xl rounded bg-neutral-900 p-4 lg:p-8 mx-auto text-lg">
        <p className="font-bold">Table of contents</p>

        <ol className="list-decimal list-inside mt-2">
          <li>
            <Link
              href="#section-1"
              className="hover:opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Section 1
            </Link>
          </li>

          <li>
            <Link
              href="#preparing-cloudflare-r2"
              className="hover:opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Preparing Cloudflare R2
            </Link>
          </li>

          <li>
            <Link
              href="#testing"
              className="hover:opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Testing
            </Link>
          </li>

          <li>
            <Link
              href="#wrapping-up"
              className="hover:opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
            >
              Wrapping up
            </Link>
          </li>
        </ol>
      </div>

      <h2 id="section-1" className="font-bold text-lg w-full max-w-3xl">
        Section 1
      </h2>

      <p className="w-full max-w-3xl text-lg">TODO: Body</p>

      <h2 id="section-2" className="font-bold text-lg w-full max-w-3xl">
        Section 2
      </h2>

      <p className="w-full max-w-3xl text-lg">TODO: Body</p>

      <h2 id="wrapping-up" className="font-bold text-lg w-full max-w-3xl">
        Wrapping up
      </h2>

      <p className="w-full max-w-3xl text-lg">TODO: GitHub Repository</p>

      <p className="w-full max-w-3xl italic text-lg">The End.</p>
    </>
  );
}
