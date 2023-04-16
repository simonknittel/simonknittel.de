import { type Metadata } from "next";
import { notFound } from "next/navigation";
import ModuleRenderer from "./_components/ModuleRenderer";
import { getModules, getPage } from "./_utils/contentful";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("/");
  if (!pageData) return {};

  return {
    title: pageData.title,
    description: pageData.description || null,
  };
}

export default async function Page() {
  const pageData = await getPage("/");
  if (!pageData) notFound();

  const modulesData = getModules(pageData.modules);
  if (!modulesData) return null;

  return <ModuleRenderer data={modulesData} />;
}
