import React from "react";
import Sidebar from "./_componentts/Sidebar";
import Navbar from "./_componentts/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="w-full md:ml-56 fixed h-[80px] border-b shadow-sm inset-y-0 z-30">
        <Navbar />
      </div>
      <div className="hidden md:flex fixed w-56 flex-col h-full inset-y-0 z-50">
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
