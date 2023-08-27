import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { SiCloudflare, SiNextdotjs, SiPrisma } from "react-icons/si";
import { getUnleashFlag } from "~/app/_lib/getUnleashFlag";
import PostExcerpt from "./_components/PostExcerpt";
import imageSrc from "./post/image-upload-to-cloudflare-r2-with-next-js-13-app-router/image.jpg";

// TODO: Add RSS feed

// TODO: Add open graph image

export const metadata: Metadata = {
  title: "Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <main className="pt-6 pb-8 px-2">
      <h1 className="max-w-3xl mx-auto text-5xl font-extrabold">Blog</h1>

      <PostExcerpt
        href="/blog/post/image-upload-to-cloudflare-r2-with-next-js-13-app-router"
        title="Image upload to Cloudflare R2 with Next.js 13 App Router"
        date={new Date("2023-06-30")}
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
        imageSrc={imageSrc}
        className="max-w-3xl mx-auto mt-8"
      />
    </main>
  );
}
