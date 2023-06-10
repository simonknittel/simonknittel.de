import { type Metadata } from "next";
import { BsFillShieldFill } from "react-icons/bs";
import { SiNextdotjs, SiPrisma, SiReacthookform } from "react-icons/si";
import PostExcerpt from "./_components/PostExcerpt";

export const metadata: Metadata = {
  title: "Blog | Simon Knittel",
};

export default function Page() {
  return (
    <main className="py-8 px-2">
      <h1 className="max-w-3xl mx-auto text-5xl font-extrabold">Blog</h1>

      <PostExcerpt
        href="/blog/post/rbac-and-abac-with-the-next-13-app-router"
        title="RBAC and ABAC with the Next.js 13 App Router"
        date={new Date("2023-05-30")}
        tags={[
          <>
            <SiNextdotjs /> Next.js
          </>,
          <>
            <BsFillShieldFill /> NextAuth.js
          </>,
          <>
            <SiPrisma /> Prisma
          </>,
          <>
            <SiReacthookform /> React Hook Form
          </>,
        ]}
        className="max-w-3xl mx-auto mt-8"
      />
    </main>
  );
}
