import { type ReactNode } from "react";
import "../styles/globals.css";
import AnalyticsContainer from "./_components/AnalyticsContainer";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
        <AnalyticsContainer />
      </body>
    </html>
  );
}
