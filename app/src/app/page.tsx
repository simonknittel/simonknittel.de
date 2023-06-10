import { type Metadata } from "next";
import { notFound } from "next/navigation";
import ModulesRenderer from "./_components/ModulesRenderer";
import {
  getContentfulPage,
  transformContentfulPageModulesToModuleRenderer,
} from "./_lib/contentful";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getContentfulPage("/");
  if (!pageData) return {};

  return {
    title: pageData.title,
    description: pageData.description || null,
  };
}

export default async function Page() {
  const pageData = await getContentfulPage("/");
  if (!pageData) notFound();

  const modulesData = transformContentfulPageModulesToModuleRenderer(
    pageData.modules
  );

  return <ModulesRenderer data={modulesData} />;
}
