"use client";

import { useEffect, useState, type MouseEventHandler } from "react";

type Props = Readonly<{
  title: string;
  text: string;
}>;

export const ShareButton = ({ title, text }: Props) => {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    const url = window.location.href.split("?")[0];

    const shareData = {
      title,
      text,
      url,
    };

    if (!navigator.canShare?.(shareData)) return;

    setCanShare(true);
  }, [title, text]);

  if (!canShare) return null;

  const handleShare: MouseEventHandler<HTMLButtonElement> = () => {
    const url = window.location.href.split("?")[0];

    void navigator.share({
      title,
      text,
      url,
    });
  };

  return (
    <button
      className="py-2 inline-block after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
      onClick={handleShare}
    >
      Share
    </button>
  );
};
