import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { SiCloudflare, SiNextdotjs, SiPrisma } from "react-icons/si";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import { InlineLink } from "../_components/InlineLink";
import { PostFooter } from "../_components/PostFooter";
import { PostHeader } from "../_components/PostHeader";
import { SectionHeading } from "../_components/SectionHeading";
import TableOfContents from "../_components/TableOfContents";
import coverSrc from "./cover.jpg";

const slug = "image-upload-to-cloudflare-r2-with-next-js-13-app-router";

export const metadata: Metadata = {
  title:
    "Image upload to Cloudflare R2 with Next.js 13 App Router - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <>
      <PostHeader
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
        imageSrc={coverSrc}
      >
        Image upload to Cloudflare R2 with Next.js 13 App Router
      </PostHeader>

      <p className="py-6 lg:py-12">
        <strong>
          In this post we are implementing the ability to upload images from a
          Next.js 13 App Router application to Cloudflare&apos;s R2 object
          storage service.
        </strong>
      </p>

      <TableOfContents
        className="max-w-xl w-full"
        links={{
          "#prerequisites": "Prerequisites",
          "#preparing-the-database": "Preparing the database",
          "#preparing-cloudflare-r2": "Preparing Cloudflare R2",
          "#integration": "Integration",
          "#testing-our-work": "Testing our work",
          "#wrapping-up": "Wrapping up",
        }}
      />

      <SectionHeading sectionHeading="Prerequisites" postSlug={slug} />

      <p>
        This post assumes that you already have setup a Next.js 13 App Router
        project and Cloudflare account.
      </p>

      <p>
        If you haven&apos;t setup a project yet, take a look at the official
        documentation on{" "}
        <InlineLink href="https://nextjs.org/docs/getting-started/installation">
          nextjs.org
        </InlineLink>
        .
      </p>

      <SectionHeading sectionHeading="Preparing the database" postSlug={slug} />

      <SectionHeading
        sectionHeading="Preparing Cloudflare R2"
        postSlug={slug}
      />

      <SectionHeading sectionHeading="Integration" postSlug={slug} />

      <p>
        Since we are just using the S3 protocol here, you could also use Amazon
        S3 or any other S3-compatible service instead of Cloudflare R2.
      </p>

      <SectionHeading sectionHeading="Uploading images" postSlug={slug} />

      <SectionHeading sectionHeading="Deleting images" postSlug={slug} />

      {/* TODO: Add GitHub repository with full example */}

      <p>
        You can find the full example on GitHub:{" "}
        <InlineLink href="https://github.com/simonknittel/???">
          simonknittel/???
        </InlineLink>
        .
      </p>

      <p>
        <em>The End.</em>
      </p>

      <PostFooter />
    </>
  );
}
