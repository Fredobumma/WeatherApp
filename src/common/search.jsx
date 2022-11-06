import React from "react";

const Search = ({
  searchQuery,
  searchInput,
  onClickToSearch,
  onCloseSearch,
  onSearch,
  ...rest
}) => {
  return (
    <React.Fragment>
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
              {...rest}
            />
            {console.log(...rest)}
            <span className="icon enter-search" onClick={onSearch}></span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
