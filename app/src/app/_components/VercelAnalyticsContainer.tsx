"use client";

import { Analytics } from "@vercel/analytics/react";

export const VercelAnalyticsContainer = () => {
  return (
    <Analytics
      beforeSend={(e) =>
        localStorage.getItem("va-disable") === "true" ? null : e
      }
    />
  );
};
