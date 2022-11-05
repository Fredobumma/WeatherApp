import React from "react";

const NavBar = ({ logo }) => {
  return (
    <nav className="navbar">
      <img src={logo} className="app-logo" alt="logo" />
      <span className="icon icon-search"></span>
    </nav>
  );
};

export default NavBar;
