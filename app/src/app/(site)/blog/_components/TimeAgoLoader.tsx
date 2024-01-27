import dynamic from "next/dynamic";
import { type ComponentPropsWithoutRef } from "react";

const TimeAgoContainer = dynamic(() => import("./TimeAgoContainer"), {
  ssr: false,
  loading: () => <span />,
});

type Props = ComponentPropsWithoutRef<typeof TimeAgoContainer>;

export const TimeAgoLoader = (props: Props) => {
  return <TimeAgoContainer {...props} />;
};
