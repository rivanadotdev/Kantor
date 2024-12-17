import { Separator } from "../atoms/separator";
import { SidebarTrigger } from "../atoms/sidebar";
import { AdminHeaderProps } from "../types/admin-header-props";

export const AdminHeader = (props: AdminHeaderProps) => {
  return (
    <header className="border-b flex-grow flex w-full h-16 p-5 items-center justify-between">
      <div className="flex gap-3 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-8" />
        {props.leftComponent}
      </div>
      {props.rightComponent}
    </header>
  );
};
