import { flag } from "@unleash/nextjs";
import { cache } from "react";
import { env } from "~/env.mjs";

type UnleashFlag = "DisableBlog";

export const getUnleashFlag = cache(async (name: UnleashFlag) => {
  const result = await flag(
    name,
    {
      environment: env.DEPLOYMENT_ENV,
    },
    {
      fetchOptions: { next: { revalidate: 60 } },
    },
  );

  return result.enabled;
});
