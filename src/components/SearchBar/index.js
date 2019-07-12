import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "10px" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Enter a search term..."
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
