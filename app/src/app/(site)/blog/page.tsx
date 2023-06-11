import { type Metadata } from "next";
import { SiNextdotjs, SiPrisma } from "react-icons/si";
import PostExcerpt from "./_components/PostExcerpt";

// TODO: Add RSS feed

export const metadata: Metadata = {
  title: "Blog | Simon Knittel",
};

export default function Page() {
  return (
    <main className="pt-6 pb-8 px-2">
      <h1 className="max-w-3xl mx-auto text-5xl font-extrabold">Blog</h1>

      <PostExcerpt
        href="/blog/post/image-upload-to-cloudflare-r2-with-next-js-13-app-router"
        title="Image upload to Cloudflare R2 with Next.js 13 App Router"
        date={new Date("2023-05-30")}
        tags={[
          <>
            <SiNextdotjs /> Next.js
          </>,
          <>
            <SiPrisma /> Prisma
          </>,
        ]}
        className="max-w-3xl mx-auto mt-8"
      />
    </main>
  );
}
