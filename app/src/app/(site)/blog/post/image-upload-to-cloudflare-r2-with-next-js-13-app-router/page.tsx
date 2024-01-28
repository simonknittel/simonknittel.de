import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import { InlineLink } from "../_components/InlineLink";
import { PostFooter } from "../_components/PostFooter";
import { PostHeader } from "../_components/PostHeader";
import { SectionHeading } from "../_components/SectionHeading";
import TableOfContents from "../_components/TableOfContents";
import { posts } from "../posts";

const post = posts[2]!;

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

      <p className="mt-6 lg:mt-12">
        <strong>
          In this post we are implementing the ability to upload images from a
          Next.js 13 App Router application to Cloudflare&apos;s R2 object
          storage service.
        </strong>
      </p>

      <TableOfContents
        links={{
          "#prerequisites": "Prerequisites",
          "#preparing-the-database": "Preparing the database",
          "#preparing-cloudflare-r2": "Preparing Cloudflare R2",
          "#integration": "Integration",
          "#testing-our-work": "Testing our work",
          "#wrapping-up": "Wrapping up",
        }}
      />

      <SectionHeading sectionHeading="Prerequisites" postSlug={post.slug} />

      <p>
        This post assumes that you already have setup a Next.js 13 App Router
        project and Cloudflare account.
      </p>

      <p>
        If you haven&apos;t setup a project yet, take a look at the official
        documentation on{" "}
        <InlineLink
          href="https://nextjs.org/docs/getting-started/installation"
          theme="neutralUnderlined"
        >
          nextjs.org
        </InlineLink>
        .
      </p>

      <SectionHeading
        sectionHeading="Preparing the database"
        postSlug={post.slug}
      />

      <SectionHeading
        sectionHeading="Preparing Cloudflare R2"
        postSlug={post.slug}
      />

      <SectionHeading sectionHeading="Integration" postSlug={post.slug} />

      <p>
        Since we are just using the S3 protocol here, you could also use Amazon
        S3 or any other S3-compatible service instead of Cloudflare R2.
      </p>

      <SectionHeading sectionHeading="Uploading images" postSlug={post.slug} />

      <SectionHeading sectionHeading="Deleting images" postSlug={post.slug} />

      {/* TODO: Add GitHub repository with full example */}

      <p>
        You can find the full example on GitHub:{" "}
        <InlineLink
          href="https://github.com/simonknittel/???"
          theme="neutralUnderlined"
        >
          simonknittel/???
        </InlineLink>
        .
      </p>

      <p>
        <em>The End.</em>
      </p>

      <PostFooter socialLinks={post.socialLinks} />
    </>
  );
}
