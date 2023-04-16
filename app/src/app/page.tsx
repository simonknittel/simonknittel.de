import { type Metadata } from "next";
import ModuleRenderer, {
  type ModuleRendererProps,
} from "./_components/ModuleRenderer";
import { getPage } from "./_utils/contentful";

export const metadata: Metadata = {
  title: "Simon Knittel - Full-Stack Developer",
};

export default async function Page() {
  const data: ModuleRendererProps["data"] = await getPage("/");
  return <ModuleRenderer data={data} />;
}
