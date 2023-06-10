import clsx from "clsx";
import { type ReactNode } from "react";
import styles from "./Header.module.css";

interface Props {
  className?: string;
  children?: ReactNode;
  date: Date;
  tags?: ReactNode[];
}

const Header = ({ className, children, date, tags }: Props) => {
  return (
    <div className="w-full max-w-3xl">
      <h1 className={clsx(className, "text-5xl font-extrabold", styles.Header)}>
        {children}
      </h1>

      <div className="text-neutral-500 mt-2 flex gap-4 flex-wrap">
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
