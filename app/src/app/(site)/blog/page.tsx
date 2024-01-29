import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/services/unleash";
import { getAllPosts } from "../../../services/posts";
import PostExcerpt from "./_components/PostExcerpt";

export const metadata: Metadata = {
  title: "All posts - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  const posts = getAllPosts();

  return (
    <main className="lg:pt-6 pb-8 px-4">
      <h1 className="sr-only">Blog</h1>

      {posts.length > 0 ? (
        posts.map((post) => (
          <PostExcerpt
            title={post.title}
            slug={post.slug}
            key={post.slug}
            date={post.publishedAt}
            tags={post.tags}
            imageSrc={post.coverSrc}
          />
        ))
      ) : (
        <p className="block text-center italic">No posts available</p>
      )}
    </main>
  );
}
