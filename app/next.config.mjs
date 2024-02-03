import { env } from "./src/env.mjs";

/** @type string */
let csp;

if (env.DEPLOYMENT_ENV === "production") {
  csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plsbl.simonknittel.de;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;
} else if (env.DEPLOYMENT_ENV === "stage") {
  csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plsbl.simonknittel.de https://vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self' https://plsbl.simonknittel.de;
  `;
} else {
  csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plsbl.simonknittel.de;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;
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
          value: csp.replace(/\n/g, ""),
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
