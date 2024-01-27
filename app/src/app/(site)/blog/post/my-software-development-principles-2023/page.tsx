import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import { InlineLink } from "../_components/InlineLink";
import { PostFooter } from "../_components/PostFooter";
import { PostHeader } from "../_components/PostHeader";
import { SectionHeading } from "../_components/SectionHeading";
import TableOfContents from "../_components/TableOfContents";

const slug = "my-software-development-principles-2023";

export const metadata: Metadata = {
  title: "My software development principles 2023 - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <>
      <PostHeader date={new Date("2023-12-31")} tags={["Opinion"]}>
        My software development principles 2023
      </PostHeader>

      <p className="mt-6 lg:mt-12">
        <strong>
          Over the years I developed some principles which define how I write or
          review code. Probably none of them are revolutionary in the world of
          software development. However, I wanted to write them down in order to
          reference them later if necessary.
        </strong>
      </p>

      <TableOfContents
        links={{
          "#keep-it-simple-stupid-kiss": "Keep it simple, stupid! (KISS)",
          "#keep-the-defaults": "Keep the defaults",
          "#keep-abstractions-low": "Keep abstractions low",
          "#deploy-and-collect-feedback-as-soon-and-often-as-possible":
            "Deploy and collect feedback as soon and often as possible",
          "#own-your-failures": "Own your failures",
          "#developer-experience-is-crucial-to-user-experience":
            "Developer Experience is crucial to User Experience",
          "#no-rollbacks": "No rollbacks",
          "#just-do-your-job": "Just do your job",
        }}
      />

      <SectionHeading
        sectionHeading="Keep it simple, stupid! (KISS)"
        postSlug={slug}
      />

      <p>
        Build the basics and the{" "}
        <InlineLink
          href="https://en.wikipedia.org/wiki/Minimum_viable_product"
          theme="neutralUnderlined"
        >
          Minimum viable product (MVP)
        </InlineLink>{" "}
        first. Expand and refactor when necessary. Avoid premature optimization.
      </p>

      <p>
        This is pretty much according the to the{" "}
        <InlineLink
          href="https://en.wikipedia.org/wiki/KISS_principle"
          theme="neutralUnderlined"
        >
          Keep it simple stupid (KISS) principle
        </InlineLink>
        .
      </p>

      <p>
        <i>Drive-by Refactoring™</i>
      </p>

      <SectionHeading sectionHeading="Keep the defaults" postSlug={slug} />

      <p>
        Stay as close as possible to the defaults of a framework, library or
        similar.
      </p>

      <SectionHeading sectionHeading="Keep abstractions low" postSlug={slug} />

      <p>
        Every abstraction can fail and cause annoying issues. Abstractions can
        also hang behind. This not only applies to libraries and frameworks but
        also to your developer tools.
      </p>

      <p>
        E.g. you could use VSCode Terminal. However, you could also just use
        your OS&apos; native terminal. You won&apos;t loose that much comfort
        but are gaining a much more supported and mature tool. Same goes for
        extensions. You could use some fancy extension which integrates your
        Jira issue into your IDE. However, that extension will always lag behind
        in features in comparison to Jira&apos;s website. In addition that, it
        can easily brake. Another example would be package managers for Node.js.
        GitHub Dependabot had support for npm since the beginning. However,{" "}
        <InlineLink
          href="https://github.blog/changelog/2023-08-02-pnpm-support-for-dependency-graph-dependabot-alerts-and-dependabot-security-updates/"
          theme="neutralUnderlined"
        >
          support for pnpm has only been added many months later
        </InlineLink>
        .
      </p>

      <SectionHeading
        sectionHeading="Deploy and collect feedback as soon and often as possible"
        postSlug={slug}
      />

      <p>
        From my experience you&apos;ll get much more valuable feedback from
        users which actually used your product in comparison to theorizing a
        long time about it.
      </p>

      <SectionHeading sectionHeading="Own your failures" postSlug={slug} />

      <p>
        Don&apos;t get discouraged, just fix it and do it better next time.
        Nobody will die (depending on your field).
      </p>

      <SectionHeading
        sectionHeading="Developer Experience is crucial to User Experience"
        postSlug={slug}
      />

      <p>
        Maybe native JavaScript could be the more elegant solution, but if your
        are more confident with Next.js or similar, just use it.
      </p>

      <SectionHeading sectionHeading="No rollbacks" postSlug={slug} />

      <p>
        You deployed your new feature and now something is broken? You probably
        want to initiate a rollback now. However, does everything rollback
        nicely? Can your database rollback as well? What about other developers
        already kept developing further?
      </p>

      <p>Rollbacks are often a mess and hard to execute properly.</p>

      <p>
        Most of the time you can just repair your application by just fixing
        what is actually broken. This may result in a longer downtime for your
        users but keeps the whole much cleaner and easier to manage.
      </p>

      <SectionHeading sectionHeading="Just do your job" postSlug={slug} />

      <p>
        <i>
          On this point I&apos;m usually not very patient, so the following
          notes can sound a bit rant-y
        </i>
        .
      </p>

      <p>
        I can&apos;t stand people doing things half ass. This is not limited to
        software development. Think about what you are doing. Found issues?
        Speak out. Don&apos;t &quot;I don&apos;t care&quot;. Got questions? Ask!
        Don&apos;t &quot;well, whatever&quot;.
      </p>

      <p>
        I&apos;m not asking to do overtime or similar. I&apos;m just asking to
        do your job.
      </p>

      <PostFooter socialLinks={[["Twitter", "https://twitter.com"]]} />
    </>
  );
}
