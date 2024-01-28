import { type StaticImageData } from "next/image";
import { SiCloudflare, SiNextdotjs, SiPrisma } from "react-icons/si";
import slugify from "slugify";
import coverSrc from "./image-upload-to-cloudflare-r2-with-next-js-13-app-router/cover.jpg";

type Post = {
  public: boolean;
  title: string;
  slug: string;
  publishedAt: Date;
  tags: React.ReactNode[];
  socialLinks?: [string, string][];
  coverSrc?: StaticImageData;
};

export const posts = [
  {
    public: false,
    title: "My software development principles 2023",
    slug: slugify("My software development principles 2023"),
    publishedAt: new Date("2023-12-31T00:00:00.000Z"),
    tags: ["Opinion"],
    socialLinks: [["Twitter", "https://twitter.com/"]],
  },

  {
    public: false,
    title: "Managing my tasks with Obsidian",
    slug: slugify("Managing my tasks with Obsidian"),
    publishedAt: new Date("2023-12-31T00:00:00.000Z"),
    tags: ["Obsidian", "Productivity"],
  },

  {
    public: false,
    title: "Image upload to Cloudflare R2 with Next.js 13 App Router",
    slug: slugify("Image upload to Cloudflare R2 with Next.js 13 App Router"),
    publishedAt: new Date("2023-12-31T00:00:00.000Z"),
    tags: [
      <>
        <SiNextdotjs /> Next.js
      </>,
      <>
        <SiCloudflare /> Cloudflare
      </>,
      <>
        <SiPrisma /> Prisma
      </>,
    ],
    coverSrc,
  },
] satisfies Array<Post>;
