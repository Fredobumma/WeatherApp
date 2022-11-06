import React from "react";
import AppLogo from "./appLogo";
import Search from "./search";

const NavBar = ({ logo, ...rest }) => {
  return (
    <nav className="navbar">
      <AppLogo logo={logo} />
      <Search {...rest} />
    </nav>
  );
};

export default NavBar;
