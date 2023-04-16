import Hero, { type HeroProps } from "./modules/Hero/Hero";

interface Props {
  data?: ({ id: string; type: "Hero" } & HeroProps)[];
}

const ModuleRenderer = ({ data = [] }: Props) => {
  return data.map((module) => {
    const { id, type, ...props } = module;

    switch (type) {
      case "Hero":
        return <Hero key={id} {...props} />;

      default:
        return null;
    }
  });
};

export default ModuleRenderer;
