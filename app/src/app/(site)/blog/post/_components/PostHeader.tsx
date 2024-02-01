import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { TimeAgoLoader } from "../../_components/TimeAgoLoader";

type Props = Readonly<{
  children?: ReactNode;
  date: Date;
  tags?: ReactNode[];
  imageSrc?: StaticImageData;
}>;

export const PostHeader = ({ children, date, tags, imageSrc }: Props) => {
  return (
    <div className="w-full max-w-3xl">
      <div
        className={clsx("text-center", {
          "p-4 lg:p-8 pt-16 lg:pt-32 bg-neutral-200 dark:bg-neutral-900 overflow-hidden lg:rounded-3xl -mx-4 lg:-mx-8 relative":
            imageSrc,
          "pt-4 lg:pt-0": !imageSrc,
        })}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            width={832}
            className="absolute inset-0 z-0"
          />
        )}

        <h1
          className={clsx(
            "text-3xl lg:text-5xl font-extrabold relative z-10 text-balance font-serif",
            {
              "text-white": imageSrc,
            },
          )}
        >
          {children}
        </h1>
      </div>

      <div
        className={clsx("text-neutral-500 mt-2 flex gap-x-4 flex-wrap", {
          "justify-between": imageSrc,
          "justify-center": !imageSrc,
        })}
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
    </div>
  );
};
