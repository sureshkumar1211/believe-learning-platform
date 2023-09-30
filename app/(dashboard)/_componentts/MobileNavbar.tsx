import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Sidebar from "./Sidebar";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-6 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-white w-8/12">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
