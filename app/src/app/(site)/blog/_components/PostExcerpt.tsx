import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { TimeAgoLoader } from "./TimeAgoLoader";

interface Props {
  className?: string;
  href: string;
  title: ReactNode;
  date: Date;
  tags?: ReactNode[];
  imageSrc?: StaticImageData;
}

const PostExcerpt = ({
  className,
  href,
  title,
  date,
  tags,
  imageSrc,
}: Readonly<Props>) => {
  return (
    <article className={clsx(className)}>
      <Link
        href={href}
        className="group relative overflow-hidden rounded lg:rounded-3xl p-4 lg:p-8 block bg-neutral-200 dark:bg-neutral-900 hover:scale-[1.02] transition-transform"
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            width={768}
            className="absolute inset-0 z-0"
          />
        )}

        <h2 className="text-xl lg:text-3xl font-extrabold relative z-10 text-balance">
          {title}
        </h2>
      </Link>

      <div className="text-neutral-500 mt-2 flex justify-between flex-wrap px-4 lg:px-8">
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
