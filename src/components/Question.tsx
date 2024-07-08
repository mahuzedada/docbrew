import React from "react";

interface Props {
  children: string | React.ReactElement;
}
export default function Question({ children }: Props): React.ReactElement {
  return <p className="text-2xl font-semibold text-center">{children}</p>;
}
