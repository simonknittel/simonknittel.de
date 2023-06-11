import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="pb-8 px-2 flex flex-col gap-8 items-center">
      {children}
    </main>
  );
}
