import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getUnleashFlag } from "~/lib/getUnleashFlag";
import PostExcerpt from "./_components/PostExcerpt";

// TODO: Add RSS feed

// TODO: Add open graph image

export const metadata: Metadata = {
  title: "Blog | Simon Knittel",
};

export default async function Page() {
  const disableBlog = await getUnleashFlag("DisableBlog");
  if (disableBlog) notFound();

  return (
    <main className="pt-6 pb-8 px-2">
      <h1 className="max-w-3xl mx-auto text-3xl lg:text-5xl font-extrabold text-center">
        Blog
      </h1>

      <PostExcerpt
        href="/blog/post/my-software-development-principles-2023"
        title="My software development principles 2023"
        date={new Date("2023-12-31")}
        className="max-w-3xl mx-auto mt-8"
        tags={["Opinion"]}
      />
    </main>
  );
}
