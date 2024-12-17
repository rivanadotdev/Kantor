import { isValidElement } from "react";
import { IconProps } from "../types/icon-props";

export const Icon = (props: IconProps) => {
  if (!props.icon) return null;
  if (isValidElement(props.icon)) return props.icon;
  const Icon = props.icon as React.ElementType;
  return <Icon />;
};
