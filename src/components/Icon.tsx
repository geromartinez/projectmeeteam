import React from "react";
import * as SVGs from "../assets/SVG";

export type IconNames = keyof typeof SVGs;

type Props = {
  addClass?: string;
  iconName?: IconNames;
  children?: any;
};

const Icon = ({ addClass = "", iconName, children }: Props) => {
  return (
    <span className={`ico ${addClass}`}>
      {iconName && SVGs[iconName]}
      {children && children}
    </span>
  );
};

export default Icon;
