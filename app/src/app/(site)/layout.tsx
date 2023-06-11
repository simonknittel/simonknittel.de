import { type ReactNode } from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] bg-neutral-800 text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
