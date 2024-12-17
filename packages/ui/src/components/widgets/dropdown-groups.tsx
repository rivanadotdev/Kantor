import {
  DropdownMenuGroup as DMG,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Icon } from "../atoms/icon";
import { DropdownGroupMenuProps } from "../types/dropdown-group-menu-props";
import { DropdownMenuProps } from "../types/dropdown-menu-props";

export const DropdownMenuGroup = (props: {
  items: DropdownGroupMenuProps[];
}) => {
  return (
    <>
      {props.items.map((item, index) => {
        if (item.type == "separator") return <DropdownMenuSeparator />;

        return (
          <DMG key={`${item.label}-${index}`}>
            {props.items.map((item, index) => {
              if (item.type == "separator") return <DropdownMenuSeparator />;

              return (
                <DropdownMenuItem {...item} key={`${item.label}-${index}`}>
                  <Icon icon={item.icon} />
                  <div>{item.label}</div>
                </DropdownMenuItem>
              );
            })}
          </DMG>
        );
      })}
    </>
  );
};

export const DropdownMenu = (props: { items: DropdownMenuProps[] }) => {
  return (
    <>
      {props.items.map((item, index) => {
        if (item.type == "separator")
          return (
            <DropdownMenuSeparator key={`dropdown-menu-separator-${index}`} />
          );
        return (
          <DropdownMenuGroup
            items={item.items}
            key={`${item.label}-${index}`}
          />
        );
      })}
    </>
  );
};
