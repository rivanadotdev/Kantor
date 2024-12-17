import { SidebarMenuItemProps } from "./sidebar-menu-item-props";

export type SidebarMenuProps = {
  label: string;
  items: SidebarMenuItemProps[];
  isCollapsible?: boolean;
  index?: number;
};
