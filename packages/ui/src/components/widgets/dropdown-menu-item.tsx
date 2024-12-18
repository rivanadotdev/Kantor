import { DropdownMenuItem as DMI, DropdownMenuGroup, DropdownMenuSeparator } from "../atoms/dropdown-menu";
import { Icon } from "../atoms/icon";
import { DropdownMenuItemProps } from "../types/dropdown-menu-item-props";

export const DropdownMenuItem = (props: {
  items: DropdownMenuItemProps[];
}) => {
  return (
    <>
      {props.items.map((item, index) => {
        if (item.type == "separator") return <DropdownMenuSeparator />;

        return (
          <DropdownMenuGroup key={`${item.label}-${index}`}>
            {props.items.map((item, index) => {
              if (item.type == "separator") return <DropdownMenuSeparator />;

              return (
                <DMI {...item} key={`${item.label}-${index}`}>
                  <Icon icon={item.icon} />
                  <div>{item.label}</div>
                </DMI>
              );
            })}
          </DropdownMenuGroup>
        );
      })}
    </>
  );
};