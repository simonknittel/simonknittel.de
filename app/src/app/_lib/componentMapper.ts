import { cloneElement, type ReactNode } from "react";

type ComponentMap = Record<string, (node: ReactNode) => ReactNode>;

export function componentMapper(nodes: ReactNode, componentMap: ComponentMap) {
  const _nodes = nodes;

  if (
    nodes === null ||
    ["string", "number", "boolean", "undefined"].includes(typeof nodes)
  )
    return nodes;

  return _nodes.map((node) => {
    if (node.props && node.type) {
      const _node = cloneElement(
        componentMap[node.type] ? componentMap[node.type](node) : node,
        node.props,
        node.props.children
          ? componentMapper(node.props.children, componentMap)
          : undefined
      );

      return _node;
    }

    return node;
  });
}
