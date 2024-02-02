import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { type Blog, type WithContext } from "schema-dts";
import { env } from "~/env.mjs";
import { getUnleashFlag } from "~/services/unleash";
import { getAllPosts } from "../../../services/posts";
import PostExcerpt from "./_components/PostExcerpt";

export const metadata: Metadata = {
  title: "All blog posts | Simon Knittel",
  description: "Overview of all my blog posts",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  const posts = getAllPosts();

  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.publishedAt.toISOString(),
      keywords: post.tags,
      description: post.description,
      author: {
        "@type": "Person",
        name: "Simon Knittel",
        url: env.BASE_URL,
      },
      url: `${process.env.BASE_URL}/blog/post/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="lg:pt-6 pb-8 px-4">
        <h1 className="sr-only">Blog</h1>

        {posts.length > 0 ? (
          posts.map((post) => (
            <PostExcerpt
              title={post.title}
              slug={post.slug}
              key={post.slug}
              date={post.publishedAt}
              tags={post.tagsWithIcons}
              imageSrc={post.coverSrc}
            />
          ))
        ) : (
          <p className="block text-center italic">No posts available</p>
        )}
      </main>
    </>
  );
}
