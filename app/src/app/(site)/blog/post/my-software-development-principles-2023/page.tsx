import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/app/_lib/getUnleashFlag";
import InlineLink from "../_components/InlineLink";
import ShareButton from "../_components/ShareButton";
import TableOfContents from "../_components/TableOfContents";
import Header from "../_components/header/Header";
import coverSrc from "./cover.jpg";

// TODO: Add open graph image

export const metadata: Metadata = {
  title: "My software development principles 2023 - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <>
      <Header date={new Date("2023-12-31")} imageSrc={coverSrc}>
        My software development principles 2023
      </Header>

      <p>
        <strong>
          Over the year I developed some ways of working which define how I
          write or review code. Probably none of them are revolutionary in the
          world of software development. However, I wanted to write them down in
          order to reference them later if necessary.
        </strong>
      </p>

      <TableOfContents
        className="max-w-3xl w-full"
        links={{
          "#keep-the-defaults": "Keep the defaults",
          "#no-rollbacks": "No rollbacks",
          "#keep-it-simple-as-long-as-possible":
            "Keep it simple as long as possible",
          "#own-your-failures": "Own your failures",
          "#developer-experience-is-crucial-to-user-experience":
            "Developer Experience is crucial to User Experience",
          "#deploy-and-collect-feedback-as-soon-and-often-as-possible":
            "Deploy and collect feedback as soon and often as possible",
          "#keep-abstractions-low": "Keep abstractions low",
          "#just-do-your-job": "Just do your job",
        }}
      />

      <h2 id="">Keep the defaults</h2>

      <p>
        Stay as close as possible to the defaults of a framework, library or
        similar.
      </p>

      <h2 id="">No rollbacks</h2>

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

      <h2 id="">Keep it simple as long as possible</h2>

      <p>
        Build the basics/
        <InlineLink href="https://en.wikipedia.org/wiki/Minimum_viable_product">
          Minimum viable product (MVP)
        </InlineLink>{" "}
        first. Expand and refactor when necessary. Avoid premature optimization.
      </p>

      <p>
        This is pretty much according the to the{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/KISS_principle">
          Keep it simple stupid (KISS) principle
        </InlineLink>
        .
      </p>

      <p>
        <i>Drive-by Refactoring™</i>
      </p>

      <h2 id="">Own your failures</h2>

      <p>
        Don&apos;t get discouraged, just fix it and do it better next time.
        Nobody will die (depending on your field).
      </p>

      <h2 id="">Developer Experience is crucial to User Experience</h2>

      <p>
        Maybe native JavaScript could be the more elegant solution, but if your
        are more confident with Next.js or similar, just use it.
      </p>

      <h2 id="">Deploy and collect feedback as soon and often as possible</h2>

      <p>
        From my experience you&apos;ll get much more valuable feedback from
        users which actually used your product in comparison to theorizing a
        long time about it.
      </p>

      <h2 id="">Keep abstractions low</h2>

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
        GitHub Dependabot had support for npm since the beginning. However,
        <InlineLink href="https://github.blog/changelog/2023-08-02-pnpm-support-for-dependency-graph-dependabot-alerts-and-dependabot-security-updates/">
          support for pnpm has only been added many months later
        </InlineLink>
        .
      </p>

      <h2 id="">Just do your job</h2>

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

      {/* TODO: Show mentions from Twitter */}

      <ShareButton
        title="My software development principles 2023"
        text="Over the year I developed some ways of working which define how I write or review code. Probably none of them are revolutionary in the world of software development. However, I wanted to write them down in order to reference them later if necessary."
      />
    </>
  );
}
