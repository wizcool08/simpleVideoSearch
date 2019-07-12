import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import youtube from "./apis/youtube";

import "./App.css";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSearchSubmit("周杰倫 Jay Chou");
  }

  onSearchSubmit = async searchValue => {
    const response = await youtube.get("/search", {
      params: {
        q: searchValue
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[1]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container">
        <div style={{ marginTop: "10px" }}>
          <h2 class="ui header">
            <i class="film icon" />
            <div className="content">Wizcool Theatre</div>
          </h2>
        </div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails selectedVideo={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
