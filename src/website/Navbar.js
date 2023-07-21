import React from "react";
import { navItems } from "./NavBar.config";

const Navbar = () => {
  return (
    <div className="flex  gap-10 font-semibold">
      {navItems.map((e) => {
        return <a> {e.title} </a>;
      })}
    </div>
  );
};

export default Navbar;
