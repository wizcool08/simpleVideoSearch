import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  onSearchChange = val => {
    console.log(val);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchChange={this.onSearchChange} />
      </div>
    );
  }
}

export default App;
