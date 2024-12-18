import { DropdownMenuItemProps } from "./dropdown-menu-item-props";

export type DropdownMenuGroupProps =
  | { type: "item", items: DropdownMenuItemProps[]; }
  | { type: "separator" };
