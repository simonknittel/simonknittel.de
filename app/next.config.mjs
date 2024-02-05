// @ts-check
import { generateCsp } from "./lib/generateCsp.mjs";
import { env } from "./src/env.mjs";

/** @type {import("./lib/generateCsp.mjs").CspSets} */
const cspSets = [
  {
    "default-src": "'self'",
    "script-src": "'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src": "'self' 'unsafe-inline'",
    "img-src": "'self' blob: data:",
    "font-src": "'self'",
    "object-src": "'none'",
    "base-uri": "'self'",
    "form-action": "'self'",
    "frame-ancestors": "'none'",
    "block-all-mixed-content": "",
    "upgrade-insecure-requests": "",
    "connect-src": "'self'",
  },
];

if (env.DEPLOYMENT_ENV === "production") {
  cspSets.push({
    "script-src": "https://plsbl.simonknittel.de",
    "connect-src": "https://plsbl.simonknittel.de",
  });
} else if (env.DEPLOYMENT_ENV === "stage") {
  // https://vercel.com/docs/workflow-collaboration/comments/specialized-usage#using-a-content-security-policy
  cspSets.push({
    "script-src": "https://vercel.live",
    "style-src": "https://vercel.live",
    "img-src": "https://vercel.com",
    "font-src":
      "https://assets.vercel.com https://fonts.gstatic.com https://vercel.live",
    "connect-src":
      "https://vercel.live wss://ws-us3.pusher.com https://sockjs-us3.pusher.com",
    "frame-src": "'self' https://vercel.live",
  });
} else {
  cspSets.push({
    "font-src": "https://fonts.gstatic.com",
  });
}

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  cleanDistDir: true,

  poweredByHeader: false,

  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: generateCsp(cspSets),
        },
      ],
    },
  ],

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default config;
