import { IconProps } from "./icon-props";

export type SidebarMenuItemProps = {
  type:  "item"
  icon?: IconProps["icon"];
  label: string;
  description: string;
  url: string;
} | {
  type: "separator"
}