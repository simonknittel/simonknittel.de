import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InlineLink from "./InlineLink";

interface Props {
  children?: ReactNode;
  date: Date;
  tags?: ReactNode[];
  imageSrc: StaticImageData;
}

const Header = ({ children, date, tags, imageSrc }: Readonly<Props>) => {
  return (
    <div className="w-full max-w-3xl">
      <InlineLink
        href="/blog"
        className="inline-flex gap-1 items-center py-2"
        theme="neutral"
      >
        <FaChevronLeft /> All blog posts
      </InlineLink>

      <div className="relative overflow-hidden lg:rounded-3xl px-2 pb-2 lg:px-8 lg:pb-8 pt-16 lg:pt-32 -mx-2 lg:-mx-8">
        <Image
          src={imageSrc}
          alt=""
          width={832}
          className="absolute inset-0 z-0"
        />

        <h1 className="text-3xl lg:text-5xl font-extrabold relative z-10 text-white text-balance">
          {children}
        </h1>
      </div>

      <div className="text-neutral-500 mt-2 flex gap-x-4 flex-wrap justify-between">
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
    </div>
  );
};

export default Header;
