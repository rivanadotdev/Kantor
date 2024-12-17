import { AvatarProps } from "./avatar-props";
import { DropdownMenuProps } from "./dropdown-menu-props";

export type SidebarUserProps = {
  email: string;
  actions?: DropdownMenuProps[] | undefined;
} & AvatarProps;
