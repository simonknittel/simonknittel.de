"use client";

import { useEffect, useState, type MouseEventHandler } from "react";

interface Props {
  title: string;
  text: string;
}

const ShareButton = ({ title, text }: Props) => {
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
    <div>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default ShareButton;
