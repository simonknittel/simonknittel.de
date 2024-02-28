"use client";

import clsx from "clsx";
import { useState, type MouseEventHandler } from "react";

export const PlausibleToggle = () => {
  // https://plausible.io/docs/excluding-localstorage
  const [isDisabled, setIsDisabled] = useState(
    window.localStorage.getItem("plausible_ignore") === "true",
  );

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (isDisabled) {
      window.localStorage.removeItem("plausible_ignore");
      setIsDisabled(false);
    } else {
      window.localStorage.setItem("plausible_ignore", "true");
      setIsDisabled(true);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div
        className={clsx("flex gap-2 items-start", {
          "text-red-500": isDisabled,
          "text-green-500": !isDisabled,
        })}
      >
        <div className="rounded-full w-6 h-6 bg-current" />

        {isDisabled ? "Disabled" : "Enabled"}
      </div>

      <button
        onClick={handleClick}
        className="text-black dark:text-neutral-300 opacity-50 hover:opacity-100 transition-opacity"
      >
        Toggle
      </button>
    </div>
  );
};

export default PlausibleToggle;
