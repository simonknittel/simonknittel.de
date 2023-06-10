import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] bg-neutral-800 text-white">{children}</div>
  );
}
