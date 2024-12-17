import { Icon } from "../atoms/icon";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../atoms/sidebar";
import { SidebarMenuItemProps } from "../types/sidebar-menu-item-props";

export const SidebarMenuItems = (props: { items: SidebarMenuItemProps[] }) => {
  const renderItem = (item: SidebarMenuItemProps, index: number) => {
    if (item.type === "separator") {
      return <SidebarSeparator key={`separator-${index}`} />;
    }

    return (
      <SidebarMenuItem key={`${item.label}-${index}`}>
        <SidebarMenuButton asChild tooltip={item.description}>
          <a href={item.url}>
            {item.icon && <Icon icon={item.icon} />}{" "}
            {/* Render icon if it exists */}
            <span>{item.label}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return <>{props.items.map(renderItem)}</>;
};
