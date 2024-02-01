"use client";

import { Analytics } from "@vercel/analytics/react";

export const VercelAnalyticsContainer = () => {
  return (
    <Analytics
      beforeSend={(e) =>
        document.cookie.includes("va-disable=true") ? null : e
      }
    />
  );
};
