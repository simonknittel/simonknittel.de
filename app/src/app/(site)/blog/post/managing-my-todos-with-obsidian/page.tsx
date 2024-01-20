import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import Header from "../_components/Header";
import { SectionHeading } from "../_components/SectionHeading";
import ShareButton from "../_components/ShareButton";
import TableOfContents from "../_components/TableOfContents";

export const metadata: Metadata = {
  title: "Managing my TODOs with Obsidian - Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <>
      <Header date={new Date("2023-12-31")} tags={["Obsidian"]}>
        Managing my TODOs with Obsidian
      </Header>

      <p>
        <strong></strong>
      </p>

      <TableOfContents
        className="max-w-xl w-full"
        links={{
          "#why-you-would-manage-your-todos-with-obsidian":
            "Why you would manage your TODOs with Obsidian",
          "#why-you-would-not-manage-your-todos-with-obsidian":
            "Why you would not manage your TODOs with Obsidian",
          "#conclusion": "Conclusion",
        }}
      />

      <SectionHeading text="Why you would manage your TODOs with Obsidian" />

      <p>
        According to the <em>Second Brain</em> concept, I want to put everything
        that I&pos;m doing my personal knowledge base. Since TODOs are things
        that I&pos;m doing and I often want to reference something else, having
        them right next to my knowledge base makes sense.
      </p>

      <SectionHeading text="Why you would not manage your TODOs with Obsidian" />

      <p>
        While Obsidian does support checkboxes in Markdown, that&pos;s about it
        in terms of TODO management. You won&pos;t get an overview of all your
        tasks. You can&pos;t schedule your tasks. If you want to have any kind
        of more involved TODO management, you&pos;ll have to use plugins.
      </p>

      <SectionHeading text="Conclusion" />

      <p>
        There are probably better or easier ways to do some parts. If you know
        some, please let me know!
      </p>

      {/* TODO: Show Twitter thread */}

      {/* TODO: Show Mastodon thread */}

      {/* TODO: Show Bluesky thread */}

      <ShareButton title="Managing my TODOs with Obsidian" text="" />
    </>
  );
}
