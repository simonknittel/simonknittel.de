import { type ComponentPropsWithoutRef } from "react";
import Hero from "./modules/Hero/Hero";

export interface ModulesRendererProps {
  data?: (
    | { id: string; type: "Hero"; props: ComponentPropsWithoutRef<typeof Hero> }
    | { id: string; type: string; props: Record<string, unknown> }
  )[];
}

const ModulesRenderer = ({ data = [] }: ModulesRendererProps) => {
  return data.map((module) => {
    const { id, type, props } = module;

    switch (type) {
      case "Hero":
        return <Hero key={id} {...props} />;

      default:
        console.warn(
          `ModulesRenderer has been provided with a module (ID: ${id}) whose type (${type}) is unknown.`,
        );
        return null;
    }
  });
};

export default ModulesRenderer;
