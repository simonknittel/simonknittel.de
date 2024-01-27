"use client";

import clsx from "clsx";
import { useState, type MouseEventHandler, type ReactNode } from "react";

type Props = Readonly<{
  className?: string;
  children: ReactNode;
  url: string;
}>;

export const SectionLink = ({ className, children, url }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    navigator.permissions
      // @ts-expect-error: clipboard-write is not standard
      .query({ name: "clipboard-write" })
      .then((result) => {
        if (result.state !== "granted" && result.state !== "prompt") return;
        return navigator.clipboard.writeText(url);
      })
      .then(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 1000);
      })
      .catch(() => {});
  };

  return (
    <a
      href={url}
      className={clsx(
        className,
        "group text-black dark:text-neutral-300 relative bottom-[-1px] px-2 inline-block cursor-pointer",
      )}
      onClick={handleClick}
      title="Copy link to section"
    >
      <span className="opacity-30 group-hover:opacity-100 transition-opacity">
        {children}
      </span>
      {showTooltip && (
        <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-black dark:bg-white text-neutral-300 dark:text-black px-2 py-1 rounded text-sm font-medium">
          Copied!
        </span>
      )}
    </a>
  );
};
