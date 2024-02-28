"use client";

import Script from "next/script";

export const PlausibleContainer = () => {
  // https://plausible.io/docs/excluding-localstorage
  const isDisabled = window.localStorage.getItem("plausible_ignore") === "true";
  if (isDisabled) return null;

  return (
    <Script
      src="https://plsbl.simonknittel.de/js/script.outbound-links.tagged-events.js"
      data-domain="simonknittel.de"
    />
  );
};
