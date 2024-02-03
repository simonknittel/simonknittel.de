import { flag } from "@unleash/nextjs";
import { cache } from "react";

type UnleashFlag = "DisableBlog";

export const getUnleashFlag = cache(async (name: UnleashFlag) => {
  const result = await flag(
    name,
    {},
    {
      fetchOptions: { next: { revalidate: 60 } },
    },
  );

  return result.enabled;
});
