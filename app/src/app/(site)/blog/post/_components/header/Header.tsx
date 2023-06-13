import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa";
import styles from "./Header.module.css";

interface Props {
  children?: ReactNode;
  date: Date;
  tags?: ReactNode[];
  imageSrc: StaticImageData;
}

const Header = ({ children, date, tags, imageSrc }: Props) => {
  return (
    <div className="w-full max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex gap-1 text-neutral-500 hover:text-white items-center py-2"
      >
        <FaChevronLeft /> All blog posts
      </Link>

      <div className="relative overflow-hidden lg:rounded-3xl px-2 pb-2 lg:px-8 lg:pb-8 pt-16 lg:pt-32 -mx-2 lg:-mx-8">
        <Image
          src={imageSrc}
          alt=""
          width={832}
          className="absolute inset-0 z-0"
        />

        <h1
          className={clsx(
            "text-3xl lg:text-5xl font-extrabold relative z-10 text-white",
            styles.Header
          )}
        >
          {children}
        </h1>
      </div>

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
    </div>
  );
};

export default Header;
