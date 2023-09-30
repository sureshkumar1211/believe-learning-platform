import React from "react";
import MobileNavbar from "./MobileNavbar";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <MobileNavbar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
