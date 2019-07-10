import React from "react";

const SearchBar = ({ onSearchChange }) => {
  const onChangeValue = e => {
    let value = e.target.value;
    onSearchChange(value);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: "5%" }}>
      <form className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            placeholder="Enter a search term..."
            onChange={onChangeValue}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
