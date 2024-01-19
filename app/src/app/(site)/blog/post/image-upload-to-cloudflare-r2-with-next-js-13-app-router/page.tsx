import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { SiCloudflare, SiNextdotjs, SiPrisma } from "react-icons/si";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import Header from "../_components/Header";
import InlineLink from "../_components/InlineLink";
import ShareButton from "../_components/ShareButton";
import TableOfContents from "../_components/TableOfContents";
import coverSrc from "./cover.jpg";

export const metadata: Metadata = {
  title:
    "Image upload to Cloudflare R2 with Next.js 13 App Router - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <>
      <Header
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
      </Header>

      <p>
        <strong>
          In this post we are implementing the ability to upload images from a
          Next.js 13 App Router application to Cloudflare&apos;s R2 object
          storage service.
        </strong>
      </p>

      <TableOfContents
        className="max-w-3xl w-full"
        links={{
          "#prerequisites": "Prerequisites",
          "#preparing-the-database": "Preparing the database",
          "#preparing-cloudflare-r2": "Preparing Cloudflare R2",
          "#integration": "Integration",
          "#testing-our-work": "Testing our work",
          "#wrapping-up": "Wrapping up",
        }}
      />

      <h2 id="prerequisites">Prerequisites</h2>

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

      <h2 id="preparing-the-database">Preparing the database</h2>

      <h2 id="preparing-cloudflare-r2">Preparing Cloudflare R2</h2>

      <h2 id="integration">Integration</h2>

      <p>
        Since we are just using the S3 protocol here, you could also use Amazon
        S3 or any other S3-compatible service instead of Cloudflare R2.
      </p>

      <h2 id="testing-our-work">Testing our work</h2>

      <h2 id="wrapping-up">Wrapping up</h2>

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

      {/* TODO: Show mentions from Twitter */}

      <ShareButton
        title="Image upload to Cloudflare R2 with Next.js 13 App Router"
        text="In this post we are implementing the ability to upload images from a Next.js 13 App Router application to Cloudflare's R2 object storage service."
      />
    </>
  );
}
