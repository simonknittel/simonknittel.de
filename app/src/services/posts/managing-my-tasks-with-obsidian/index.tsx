import { slugify } from "~/lib/slugify";
import { type Post } from "..";
import { SectionHeading } from "../../../app/(site)/blog/post/_components/SectionHeading";
import TableOfContents from "../../../app/(site)/blog/post/_components/TableOfContents";

const title = "Managing my tasks with Obsidian";
const slug = slugify(title);
const publishedAt = new Date("2023-12-31T00:00:00.000Z");
const tags = ["Obsidian", "Productivity"];

export const post: Post = {
  public: false,
  title,
  slug,
  publishedAt,
  tags,
  body: (
    <>
      <TableOfContents
        links={{
          "#why-you-would-manage-your-tasks-with-obsidian":
            "Why you would manage your tasks with Obsidian",
          "#why-you-would-not-manage-your-tasks-with-obsidian":
            "Why you would not manage your tasks with Obsidian",
          "#conclusion": "Conclusion",
        }}
      />

      <SectionHeading
        sectionHeading="Why you would manage your tasks with Obsidian"
        postSlug={slug}
      />

      <p>
        According to the <em>Second Brain</em> concept, I want to put everything
        that I&pos;m doing my personal knowledge base. Since tasks are things
        that I&pos;m doing and I often want to reference something else, having
        them right next to my knowledge base makes sense.
      </p>

      <SectionHeading
        sectionHeading="Why you would not manage your tasks with Obsidian"
        postSlug={slug}
      />

      <p>
        While Obsidian does support checkboxes in Markdown, that&pos;s about it
        in terms of task management. You won&pos;t get an overview of all your
        tasks. You can&pos;t schedule your tasks. If you want to have any kind
        of more involved task management, you&pos;ll have to use plugins.
      </p>

      <SectionHeading sectionHeading="Conclusion" postSlug={slug} />

      <p>
        There are probably better or easier ways to do some parts. If you know
        some, please let me know!
      </p>
    </>
  ),
};
