import { SidebarGroupMenuProps } from "./sidebar-group-menu-props";

export type SidebarProps = {
  header?: React.ReactNode | undefined;
  footer?: React.ReactNode | undefined;
  menu: SidebarGroupMenuProps[];
  collapsible?: "icon" | "offcanvas" | "none" | undefined;
};
