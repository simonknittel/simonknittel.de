import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    UNLEASH_SERVER_API_URL: z.string().url(),
    UNLEASH_SERVER_API_TOKEN: z.string(),
    BASE_URL: z.preprocess(
      // Uses VERCEL_URL if BASE_URL is not set, e.g. on Vercel's preview deployments
      (str) => str || `https://${process.env.VERCEL_URL}`,
      z.string().url(),
    ),
    VERCEL_ENV: z.enum(["production", "preview", "development"]).optional(),
  },

  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    UNLEASH_SERVER_API_URL: process.env.UNLEASH_SERVER_API_URL,
    UNLEASH_SERVER_API_TOKEN: process.env.UNLEASH_SERVER_API_TOKEN,
    BASE_URL: process.env.BASE_URL,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },

  emptyStringAsUndefined: true,
});
