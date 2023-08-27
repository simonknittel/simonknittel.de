import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    UNLEASH_SERVER_API_URL: z.string().url(),
    UNLEASH_SERVER_API_TOKEN: z.string(),
  },

  client: {},

  // Client-side variables need to be destructured from `process.env`
  // experimental__runtimeEnv: {}
});
