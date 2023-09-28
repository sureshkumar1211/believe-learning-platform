"use client";
import Image from "next/image";
import React from "react";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="w-full border-r shadow-sm h-screen overflow-auto flex gap-3 flex-col">
      <div className="p-6">
        <Image width={130} height={130} src={"/logo.svg"} alt="logo" />
      </div>
      <SidebarRoutes />
    </div>
  );
};

export default Sidebar;
