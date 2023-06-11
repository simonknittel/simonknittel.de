import { type Metadata } from "next";
import { SiNextdotjs, SiPrisma } from "react-icons/si";
import Header from "../_components/header/Header";
import imageSrc from "./image.jpg";

export const metadata: Metadata = {
  title:
    "Image upload to Cloudflare R2 with Next.js 13 App Router - Blog | Simon Knittel",
};

export default function Page() {
  return (
    <>
      <Header
        date={new Date("2023-05-30")}
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

      <p className="font-bold w-full max-w-3xl text-lg">
        TODO: Table of contents
      </p>

      <p className="w-full max-w-3xl text-lg">TODO: Body</p>

      <p className="w-full max-w-3xl italic">The End.</p>
    </>
  );
}
