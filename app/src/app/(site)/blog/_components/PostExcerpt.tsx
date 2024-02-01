import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { TimeAgoLoader } from "./TimeAgoLoader";

interface Props {
  className?: string;
  slug: string;
  title: ReactNode;
  date: Date;
  tags?: ReactNode[];
  imageSrc?: StaticImageData;
}

const PostExcerpt = ({
  className,
  slug,
  title,
  date,
  tags,
  imageSrc,
}: Readonly<Props>) => {
  return (
    <article className={clsx(className, "max-w-3xl mx-auto mt-8")}>
      <Link
        href={`/blog/post/${slug}`}
        className={clsx(
          "group relative block hover:scale-[1.02] transition-transform",
          {
            "p-4 lg:p-8 overflow-hidden rounded lg:rounded-3xl": imageSrc,
          },
        )}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            width={768}
            className="absolute inset-0 z-0"
          />
        )}

        <h2 className="text-xl lg:text-3xl font-extrabold relative z-10 text-balance font-serif">
          {title}
        </h2>
      </Link>

      <div
        className={clsx(
          "text-neutral-500 mt-2 flex justify-between flex-wrap",
          {
            "px-4 lg:px-8": imageSrc,
          },
        )}
      >
        <TimeAgoLoader date={date} />

        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="flex gap-1 items-center">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default PostExcerpt;
