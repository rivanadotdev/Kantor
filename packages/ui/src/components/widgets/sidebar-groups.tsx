import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Plus } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarSeparator,
} from "../atoms/sidebar";
import type { SidebarGroupMenuProps } from "../types/sidebar-group-menu-props";
import type { SidebarMenuProps } from "../types/sidebar-menu-props";
import { SidebarMenuItems } from "./sidebar-menu-items";

const CollapsibleSidebarGroup = (props: SidebarMenuProps) => (
  <Collapsible defaultOpen className="group/collapsible">
    <SidebarGroup key={`${props.label}-${props.index}`}>
      <SidebarGroupLabel>
        <CollapsibleTrigger className="flex justify-between w-full item-center">
          <div>{props.label}</div>
          <Plus size={15} />
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenuItems items={props.items} />
        </SidebarGroupContent>
      </CollapsibleContent>
    </SidebarGroup>
  </Collapsible>
);

const DefaultSidebarGroup = (props: SidebarMenuProps) => (
  <SidebarGroup key={`${props.label}-${props.index}`}>
    <SidebarGroupLabel>{props.label}</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenuItems items={props.items} />
    </SidebarGroupContent>
  </SidebarGroup>
);

export const SidebarGroups = (props: { menu: SidebarGroupMenuProps[] }) => {
  return (
    <>
      {props.menu.map((item, index) => {
        if (item.type == "separator") return <SidebarSeparator key={`sidebar-menu-separator-${index}`} />;
        if (item.isCollapsible)
          return <CollapsibleSidebarGroup key={`sidebar-menu-group-${index}`} {...item} index={index} />;
        return <DefaultSidebarGroup {...item} index={index} key={`sidebar-menu-group-${index}`} />;
      })}
    </>
  );
};
