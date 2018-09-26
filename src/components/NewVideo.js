import React from "react";
import { Link } from "react-router-dom";

class NewVideo extends React.Component {
  state = {
    text: ""
  };

  searchForStreamer = () => {
    // this.props.addToVideos(this.state.text);

    this.props.location.addToVideos(this.state.text);
  };

  render() {
    return (
      <div className="videoForm">
        <input
          type="text"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          placeholder="Enter in a Streamer ID"
        />
        <Link
          className="link"
          to="/"
          onClick={() => this.searchForStreamer()}
          value="Search"
        />
      </div>
    );
  }
}

export default NewVideo;
