import { SidebarProvider } from "@/components/atoms/sidebar";
import { Sidebar } from "@/components/blocks/sidebar";
import { ReactNode } from "react";
import { AdminHeader } from "../blocks/admin-header";
import { AdminHeaderProps } from "../types/admin-header-props";
import { SidebarProps } from "../types/sidebar-props";

type AdminLayoutProps = {
  children: ReactNode;
  sidebarProps: SidebarProps;
  header: AdminHeaderProps;
};

export default function AdminLayout(props: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar {...props.sidebarProps} />
      <main className="flex-grow">
        <AdminHeader {...props.header} />
        {props.children}
      </main>
    </SidebarProvider>
  );
}
