import { getInitials } from "@/libs/get-initials";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../atoms/sidebar";
import { AvatarProps } from "../types/avatar-props";

export const SidebarLogo = (props: AvatarProps) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={props.avatar} alt={props.name} />
            <AvatarFallback className="rounded-lg">
              {getInitials(props.name)}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{props.name}</span>
            <span className="truncate text-xs">{props.name}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
