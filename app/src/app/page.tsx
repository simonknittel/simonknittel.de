import { type Metadata } from "next";
import { notFound } from "next/navigation";
import ModuleRenderer from "./_components/ModuleRenderer";
import { getModules, getPage } from "./_utils/contentful";

export const metadata: Metadata = {
  title: "Simon Knittel - Full-Stack Developer",
};

export default async function Page() {
  const pageData = await getPage("/");
  if (!pageData) notFound();

  const modulesData = getModules(pageData.modules);
  if (!modulesData) return null;

  return <ModuleRenderer data={modulesData} />;
}
