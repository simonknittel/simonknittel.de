import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="pb-8 px-2 flex flex-col gap-8 items-center [&>p]:w-full [&>p]:max-w-3xl [&>p]:text-lg [&>h2]:w-full [&>h2]:max-w-3xl [&>h2]:text-lg [&>h2]:font-bold">
      {children}
    </main>
  );
}
