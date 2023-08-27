import { type ReactNode } from "react";
import { getUnleashFlag } from "../_lib/getUnleashFlag";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  const disableBlog = await getUnleashFlag("DisableBlog");

  return (
    <div className="min-h-[100dvh] bg-neutral-800 text-white">
      <Header disableBlog={disableBlog} />
      {children}
      <Footer disableBlog={disableBlog} />
    </div>
  );
}
