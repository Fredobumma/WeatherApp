import React from "react";

const SearchInput = ({
  city,
  searchQuery,
  searchInput,
  onClickToSearch,
  onCloseSearch,
  onSearch,
  ...rest
}) => {
  return (
    <React.Fragment>
      <span
        className={`icon icon-search bg-magnifying_glass_solid ${
          !city && "icon-new-search bg-magnifying_glass_plus_solid"
        }`}
        onClick={onClickToSearch}
      ></span>
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
            <span
              className="icon enter-search bg-arrow_right_solid"
              onClick={onSearch}
            ></span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchInput;
