import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import { PostFooter } from "../_components/PostFooter";
import { PostHeader } from "../_components/PostHeader";
import { getPostBySlug } from "../_lib/getPostBySlug";

type Props = Readonly<{ params: { slug: string } }>;

export const generateMetadata = ({ params }: Readonly<Props>): Metadata => {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: `${post.title} - Blog | Simon Knittel`,
  };
};

export default async function Page({ params }: Props) {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="py-4 lg:py-12 px-4 flex flex-col gap-4 items-center [&>p]:w-full [&>p]:max-w-3xl [&>p]:text-lg [&>h2]:w-full [&>h2]:max-w-3xl [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-6 lg:[&>h2]:mt-12">
      <PostHeader
        date={post.publishedAt}
        tags={post.tags}
        imageSrc={post.coverSrc}
      >
        {post.title}
      </PostHeader>

      {post.body}

      <PostFooter socialLinks={post.socialLinks} />
    </main>
  );
}
