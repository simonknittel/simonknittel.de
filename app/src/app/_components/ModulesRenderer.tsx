import Hero, { type HeroProps } from "./modules/Hero/Hero";

export interface ModulesRendererProps {
  data?: (
    | { id: string; type: "Hero"; props: HeroProps }
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
          `ModulesRenderer has been provided with a module (ID: ${id}) whose type (${type}) is unknown.`
        );
        return null;
    }
  });
};

export default ModulesRenderer;
