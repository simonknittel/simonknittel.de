import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import styles from "./PostExcerpt.module.css";

interface Props {
  className?: string;
  href: string;
  title: ReactNode;
  date: Date;
  tags?: ReactNode[];
  imageSrc: StaticImageData;
}

const PostExcerpt = ({
  className,
  href,
  title,
  date,
  tags,
  imageSrc,
}: Props) => {
  return (
    <article className={clsx(className)}>
      <Link
        href={href}
        className="relative overflow-hidden rounded lg:rounded-3xl p-2 lg:p-8 hover:opacity-50 block"
      >
        <Image
          src={imageSrc}
          alt=""
          width={768}
          className="absolute inset-0 z-0"
        />

        <h2
          className={clsx(
            "text-3xl font-extrabold relative z-10",
            styles.PostExcerpt
          )}
        >
          {title}
        </h2>
      </Link>

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
