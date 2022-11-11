import React from "react";
import AppLogo from "./appLogo";
import logo from "../images/logo.svg";
import SearchInput from "./searchInput";

const NavBar = ({ ...rest }) => {
  return (
    <nav className="navbar">
      <AppLogo logo={logo} />
      <SearchInput {...rest} />
    </nav>
  );
};

export default NavBar;
