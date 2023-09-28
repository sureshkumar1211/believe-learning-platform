import { Globe, LayoutDashboard } from "lucide-react";
import React from "react";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

const SidebarRoutes = () => {
  const guestRoutes: SidebarItemProps[] = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: Globe,
      label: "Browse",
      href: "/browse",
    },
  ];

  const renderRoutes = () => {
    return guestRoutes.map((item: SidebarItemProps, index: number) => {
      return <SidebarItem key={index} {...item} />;
    });
  };
  return <div>{renderRoutes()}</div>;
};

export default SidebarRoutes;
