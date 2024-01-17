import { type ReactNode } from "react";
import "../styles/globals.css";
import AnalyticsContainer from "./_components/AnalyticsContainer";

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
