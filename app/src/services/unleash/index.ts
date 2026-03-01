import { flag } from "@unleash/nextjs";
import { cache } from "react";
import { env } from "~/env.mjs";

type UnleashFlag = "DisableBlog";

export const getUnleashFlag = cache(async (name: UnleashFlag) => {
  if (!env.UNLEASH_SERVER_API_URL || !env.UNLEASH_SERVER_API_TOKEN) {
    console.warn(
      "Missing environment variables for Unleash. Returning false for all flags.",
    );
    return false;
  }

  const result = await flag(
    name,
    {},
    {
      fetchOptions: { next: { revalidate: 60 } },
    },
  );

  return result.enabled;
});
