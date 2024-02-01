import { SiCloudflare, SiNextdotjs, SiPrisma } from "react-icons/si";
import { slugify } from "~/lib/slugify";
import { type Post } from "..";
import { InlineLink } from "../../../app/(site)/blog/post/_components/InlineLink";
import { SectionHeading } from "../../../app/(site)/blog/post/_components/SectionHeading";
import TableOfContents from "../../../app/(site)/blog/post/_components/TableOfContents";
import coverSrc from "./cover.jpg";

const title = "Image upload to Cloudflare R2 with Next.js 13 App Router";
const slug = slugify(title);
const publishedAt = new Date("2023-12-31T00:00:00.000Z");
const tags = [
  <>
    <SiNextdotjs /> Next.js
  </>,
  <>
    <SiCloudflare /> Cloudflare
  </>,
  <>
    <SiPrisma /> Prisma
  </>,
];
const description =
  "In this post we are implementing the ability to upload images from a Next.js 13 App Router application to Cloudflare's R2 object storage service.";

export const post: Post = {
  public: false,
  title,
  slug,
  publishedAt,
  tags,
  coverSrc,
  description,
  body: (
    <>
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

      <SectionHeading sectionHeading="Prerequisites" postSlug={slug} />

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
    </>
  ),
};
