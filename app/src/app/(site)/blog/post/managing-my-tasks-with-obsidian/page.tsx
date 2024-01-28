import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import { PostFooter } from "../_components/PostFooter";
import { PostHeader } from "../_components/PostHeader";
import { SectionHeading } from "../_components/SectionHeading";
import TableOfContents from "../_components/TableOfContents";
import { posts } from "../posts";

const post = posts[1]!;

export const metadata: Metadata = {
  title: `${post.title} - Blog | Simon Knittel`,
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <>
      <PostHeader
        date={post.publishedAt}
        tags={post.tags}
        imageSrc={post.coverSrc}
      >
        {post.title}
      </PostHeader>

      <TableOfContents
        links={{
          "#why-you-would-manage-your-todos-with-obsidian":
            "Why you would manage your TODOs with Obsidian",
          "#why-you-would-not-manage-your-todos-with-obsidian":
            "Why you would not manage your TODOs with Obsidian",
          "#conclusion": "Conclusion",
        }}
      />

      <SectionHeading
        sectionHeading="Why you would manage your TODOs with Obsidian"
        postSlug={post.slug}
      />

      <p>
        According to the <em>Second Brain</em> concept, I want to put everything
        that I&pos;m doing my personal knowledge base. Since TODOs are things
        that I&pos;m doing and I often want to reference something else, having
        them right next to my knowledge base makes sense.
      </p>

      <SectionHeading
        sectionHeading="Why you would not manage your TODOs with Obsidian"
        postSlug={post.slug}
      />

      <p>
        While Obsidian does support checkboxes in Markdown, that&pos;s about it
        in terms of TODO management. You won&pos;t get an overview of all your
        tasks. You can&pos;t schedule your tasks. If you want to have any kind
        of more involved TODO management, you&pos;ll have to use plugins.
      </p>

      <SectionHeading sectionHeading="Conclusion" postSlug={post.slug} />

      <p>
        There are probably better or easier ways to do some parts. If you know
        some, please let me know!
      </p>

      <PostFooter socialLinks={post.socialLinks} />
    </>
  );
}
