import Hero, { type HeroProps } from "./modules/Hero/Hero";

export interface ModulesRendererProps {
  data?: ({ id: string; type: "Hero" | string } & HeroProps)[];
}

const ModulesRenderer = ({ data = [] }: ModulesRendererProps) => {
  return data.map((module) => {
    const { id, type, ...props } = module;

    switch (type) {
      case "Hero":
        return <Hero key={id} {...props} />;

      default:
        console.warn(
          `ModuleRender has been provided with a module (ID: ${id}) whose type (${type}) is unknown.`
        );
        return null;
    }
  });
};

export default ModulesRenderer;
