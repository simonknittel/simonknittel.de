import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    UNLEASH_SERVER_API_URL: z.string().url(),
    UNLEASH_SERVER_API_TOKEN: z.string(),
    BASE_URL: z.preprocess(
      // Uses VERCEL_URL if BASE_URL is not set, e.g. on Vercel's preview deployments
      (str) => {
        if (str) {
          return str;
        } else if (process.env.VERCEL_URL) {
          return `https://${process.env.VERCEL_URL}`;
        }
        return "http://localhost:3000";
      },
      z.string().url(),
    ),
    DEPLOYMENT_ENV: z.preprocess(
      // Uses VERCEL_ENV if DEPLOYMENT_ENV is not set, e.g. on Vercel's preview deployments
      (str) => {
        if (str) {
          return str;
        } else if (process.env.VERCEL_ENV) {
          switch (process.env.VERCEL_ENV) {
            case "production":
              return "production";
            case "preview":
              return "stage";
            case "development":
              return "development";
          }
        }
        return "development";
      },
      z.enum(["production", "stage", "development"]),
    ),
  },

  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    UNLEASH_SERVER_API_URL: process.env.UNLEASH_SERVER_API_URL,
    UNLEASH_SERVER_API_TOKEN: process.env.UNLEASH_SERVER_API_TOKEN,
    BASE_URL: process.env.BASE_URL,
    DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
  },

  emptyStringAsUndefined: true,
});
