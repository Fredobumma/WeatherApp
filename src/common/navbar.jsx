import React from "react";

const NavBar = ({
  logo,
  searchQuery,
  searchInput,
  onClickToSearch,
  onCloseSearch,
  onChange,
}) => {
  return (
    <nav className="navbar">
      <img src={logo} className="app-logo" alt="logo" />
      <span className="icon icon-search" onClick={onClickToSearch}></span>
      {searchInput && (
        <div className="search--backdrop" onClick={onCloseSearch}>
          <div className="search--box" onClick={(e) => e.stopPropagation()}>
            <input
              autoFocus={searchInput}
              type="text"
              className="search--input"
              placeholder="Search City Name"
              autoComplete="country-name"
              value={searchQuery}
              onChange={onChange}
            />
            <span className="icon enter-search"></span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
