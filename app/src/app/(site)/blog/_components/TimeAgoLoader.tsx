import dynamic from "next/dynamic";
import { type ComponentPropsWithoutRef } from "react";

const TimeAgoContainer = dynamic(() => import("./TimeAgoContainer"), {
  ssr: false,
  loading: () => <span className="inline-block w-[5em]" />,
});

type Props = ComponentPropsWithoutRef<typeof TimeAgoContainer>;

export const TimeAgoLoader = (props: Props) => {
  return <TimeAgoContainer {...props} />;
};
