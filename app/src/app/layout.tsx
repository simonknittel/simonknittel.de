import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import { env } from "~/env.mjs";
import "../styles/globals.css";

const PlausibleContainer = dynamic(
  () =>
    import("./_components/PlausibleContainer").then(
      (mod) => mod.PlausibleContainer,
    ),
  { ssr: false },
);

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

        {env.DEPLOYMENT_ENV === "production" && <PlausibleContainer />}
      </body>
    </html>
  );
}
