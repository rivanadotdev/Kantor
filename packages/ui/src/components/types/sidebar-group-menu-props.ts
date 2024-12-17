import { SidebarMenuProps } from "./sidebar-menu-props";

export type SidebarGroupMenuProps =
  | ({ type: "item" } & SidebarMenuProps)
  | { type: "separator" };
