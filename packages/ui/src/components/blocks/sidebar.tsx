import {
  Sidebar as SB,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/atoms/sidebar";

import { SidebarProps } from "../types/sidebar-props";
import { SidebarGroups } from "../widgets/sidebar-groups";

export const Sidebar = (props: SidebarProps) => {
  return (
    <SB collapsible={props.collapsible}>
      <SidebarHeader className="h-16 justify-center">
        {props.header}
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroups menu={props.menu} />
      </SidebarContent>
      <SidebarFooter>{props.footer}</SidebarFooter>
    </SB>
  );
};
