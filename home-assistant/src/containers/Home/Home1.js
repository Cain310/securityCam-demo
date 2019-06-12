import React from "react";
import "./Home1.scss";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="responsive-video-grid-container">
            <VideoGrid title="Saved Videos" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
