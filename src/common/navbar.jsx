import React from "react";
import AppLogo from "./appLogo";
import SearchInput from "./searchInput";

const NavBar = ({ logo, ...rest }) => {
  return (
    <nav className="navbar">
      <AppLogo logo={logo} />
      <SearchInput {...rest} />
    </nav>
  );
};

export default NavBar;
