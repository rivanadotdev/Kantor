import {
  DropdownMenuSeparator
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuGroupProps } from "../types/dropdown-menu-group-props";
import { DropdownMenuItem } from "./dropdown-menu-item";



export const DropdownMenuGroup = (props: { items: DropdownMenuGroupProps[] }) => {
  return (
    <>
      {props.items.map((item, index) => {
        if (item.type == "separator")
          return (
            <DropdownMenuSeparator key={`dropdown-menu-separator-${index}`} />
          );
        return (
          <DropdownMenuItem
            items={item.items}
            key={`dropdown-menu-group-${index}`}
          />
        );
      })}
    </>
  );
};
