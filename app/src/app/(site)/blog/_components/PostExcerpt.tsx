import clsx from "clsx";
import Link from "next/link";
import { type ReactNode } from "react";
import styles from "./PostExcerpt.module.css";

interface Props {
  className?: string;
  href: string;
  title: ReactNode;
  date: Date;
  tags?: ReactNode[];
}

const PostExcerpt = ({ className, href, title, date, tags }: Props) => {
  return (
    <article className={clsx(className)}>
      <h2 className={clsx("text-3xl font-extrabold", styles.PostExcerpt)}>
        <Link href={href} className="hover:opacity-50">
          {title}
        </Link>
      </h2>

      <div className="text-neutral-500 mt-2 flex gap-x-4 flex-wrap">
        <time dateTime={date.toISOString()}>
          {date.toLocaleDateString("en", {
            dateStyle: "long",
          })}
        </time>

        {tags?.map((tag, index) => (
          <span key={index} className="flex gap-1 items-center">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostExcerpt;
