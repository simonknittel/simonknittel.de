import Hero, { type HeroProps } from "./modules/Hero/Hero";

export interface ModuleRendererProps {
  data?: ({ id: string; type: "Hero" } & HeroProps)[];
}

const ModuleRenderer = ({ data = [] }: ModuleRendererProps) => {
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

export default ModuleRenderer;
