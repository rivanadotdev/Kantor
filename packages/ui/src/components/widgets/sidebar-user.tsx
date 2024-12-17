import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { getInitials } from "@/libs/get-initials";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../atoms/sidebar";
import { SidebarUserProps } from "../types/sidebar-user-props";

// Component for user info display in dropdown
const UserInfo = (props: SidebarUserProps) => (
  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage src={props.avatar} alt={props.name} />
      <AvatarFallback className="rounded-lg">
        {getInitials(props.name)}
      </AvatarFallback>
    </Avatar>
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-semibold">{props.name}</span>
      <span className="truncate text-xs">{props.email}</span>
    </div>
  </div>
);

// Component for dropdown menu actions
const DropdownActions = () => (
  <>
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <Sparkles />
        Upgrade to Pro
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <BadgeCheck />
        Account
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard />
        Billing
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Bell />
        Notifications
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
  </>
);

export const SidebarUser = (props: SidebarUserProps) => {
  const { isMobile, open } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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
                <span className="truncate text-xs">{props.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              {!open ? (
                <UserInfo
                  name={props.name}
                  email={props.email}
                  avatar={props.avatar}
                />
              ) : null}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownActions />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
