import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { env } from "~/env.mjs";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import PostExcerpt from "./_components/PostExcerpt";
import { posts } from "./post/_posts";

export const metadata: Metadata = {
  title: "All posts - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <main className="lg:pt-6 pb-8 px-4">
      <h1 className="sr-only">Blog</h1>

      {posts
        .filter(
          (post) => env.VERCEL_ENV !== "production" || post.public === true,
        )
        .map((post) => (
          <PostExcerpt
            title={post.title}
            slug={post.slug}
            key={post.slug}
            date={post.publishedAt}
            tags={post.tags}
            imageSrc={post.coverSrc}
          />
        ))}
    </main>
  );
}
