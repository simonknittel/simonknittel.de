import { type Metadata } from "next";
import Script from "next/script";
import { type ReactNode } from "react";
import { env } from "~/env.mjs";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(env.BASE_URL),
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://plsbl.simonknittel.de/js/script.outbound-links.tagged-events.js"
          data-domain="simonknittel.de"
        />
      </body>
    </html>
  );
}
