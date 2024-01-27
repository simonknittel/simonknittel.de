import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { SiCloudflare, SiNextdotjs, SiPrisma } from "react-icons/si";
import { env } from "~/env.mjs";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import PostExcerpt from "./_components/PostExcerpt";
import coverSrc from "./post/image-upload-to-cloudflare-r2-with-next-js-13-app-router/cover.jpg";

// TODO: Add RSS feed

// TODO: Add open graph image

export const metadata: Metadata = {
  title: "All posts - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <main className="lg:pt-6 pb-8 px-4">
      <h1 className="sr-only">Blog</h1>

      {env.VERCEL_ENV !== "production" && (
        <PostExcerpt
          href="/blog/post/my-software-development-principles-2023"
          title="My software development principles 2023"
          date={new Date("2024-01-27T10:00:00Z")}
          className="max-w-3xl mx-auto mt-8"
          tags={["Opinion"]}
        />
      )}

      {env.VERCEL_ENV !== "production" && (
        <PostExcerpt
          href="/blog/post/managing-my-todos-with-obsidian"
          title="Managing my TODOs with Obsidian"
          date={new Date("2024-01-26")}
          className="max-w-3xl mx-auto mt-8"
          tags={["Obsidian"]}
        />
      )}

      {env.VERCEL_ENV !== "production" && (
        <PostExcerpt
          href="/blog/post/image-upload-to-cloudflare-r2-with-next-js-13-app-router"
          title="Image upload to Cloudflare R2 with Next.js 13 App Router"
          date={new Date("2023-06-30")}
          className="max-w-3xl mx-auto mt-8"
          imageSrc={coverSrc}
          tags={[
            <>
              <SiNextdotjs /> Next.js
            </>,
            <>
              <SiCloudflare /> Cloudflare
            </>,
            <>
              <SiPrisma /> Prisma
            </>,
          ]}
        />
      )}
    </main>
  );
}
