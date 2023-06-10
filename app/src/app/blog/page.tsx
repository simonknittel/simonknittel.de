import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Page() {
  return (
    <main>
      <h1>Blog</h1>

      <article>
        <h2>RBAC and ABAC with the Next.js 13 App Router</h2>

        <Link
          href="/blog/post/rbac-and-abac-with-the-next-13-app-router"
          className="flex gap-2 items-center"
        >
          <FaChevronRight /> Read more
        </Link>
      </article>
    </main>
  );
}
