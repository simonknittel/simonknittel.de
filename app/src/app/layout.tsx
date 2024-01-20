import { type Metadata } from "next";
import { type ReactNode } from "react";
import { env } from "~/env.mjs";
import "../styles/globals.css";
import AnalyticsContainer from "./_components/AnalyticsContainer";

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
        <AnalyticsContainer />
      </body>
    </html>
  );
}
