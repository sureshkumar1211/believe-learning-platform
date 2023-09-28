import React from "react";
import Sidebar from "./_componentts/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="hidden md:flex fixed w-56 flex-col h-full inset-y-0">
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
