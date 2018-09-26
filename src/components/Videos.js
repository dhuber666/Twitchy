import React from "react";
import Video from "./Video";
import { Link } from "react-router-dom";

class Videos extends React.Component {
  state = {
    videos: []
  };

  renderVideos = () => {
    const { videos } = this.state;

    return videos.map(video => <Video thumbnailURL={video.thumbnailURL} />);
  };

  addToVideos = videoText => {
    const videoURL = `https://twitch.tv/${videoText}`;
    const video = { videoURL };
    debugger;
    this.setState({
      videos: this.state.videos.concat(video)
    });
  };

  addNewVideo = () => {
    return (
      <div className="newVideo">
        <Link
          to={{
            pathname: "/new",
            addToVideos: this.addToVideos
          }}
        >
          <svg
            onClick={() => this.props.history.push("/new")}
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2083 18.9583H29.7917V29.7917H18.9583V35.2083H29.7917V46.0417H35.2083V35.2083H46.0417V29.7917H35.2083V18.9583ZM32.5 5.41667C17.55 5.41667 5.41667 17.55 5.41667 32.5C5.41667 47.45 17.55 59.5833 32.5 59.5833C47.45 59.5833 59.5833 47.45 59.5833 32.5C59.5833 17.55 47.45 5.41667 32.5 5.41667ZM32.5 54.1667C20.5563 54.1667 10.8333 44.4438 10.8333 32.5C10.8333 20.5563 20.5563 10.8333 32.5 10.8333C44.4438 10.8333 54.1667 20.5563 54.1667 32.5C54.1667 44.4438 44.4438 54.1667 32.5 54.1667Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Add your favourite Streamers</h1>
        <div className="videosContainer">
          {this.renderVideos()}
          {this.addNewVideo()}
          {this.addNewVideo()}
        </div>
      </div>
    );
  }
}

export default Videos;
