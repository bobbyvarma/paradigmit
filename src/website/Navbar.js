import React from "react";
import { navItems } from "./NavBar.config";

const Navbar = () => {
  const logo="./images/logo.png"
  return (
    <div className="flex gap-10  font-bold">
      {navItems.map((e) => {

        return <a className="hover:text-blue-600   "> {e.title} {e.icon}</a>

      })}
    </div>
  );
};

export default Navbar;
