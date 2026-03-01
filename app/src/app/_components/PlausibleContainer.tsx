"use client";

import { init } from "@plausible-analytics/tracker";
import { useEffect } from "react";

export const PlausibleContainer = () => {
  useEffect(() => {
    init({
      domain: "simonknittel.de",
      endpoint: "https://plsbl.simonknittel.de/api/event",
      outboundLinks: true,
    });
  }, []);

  return null;
};
