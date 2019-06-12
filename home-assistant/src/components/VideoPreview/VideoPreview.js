import React from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.scss";

export class VideoPreview extends React.Component {
  render() {
    return (
      <div className="video-preview">
        <div className="image-container">
          <Image
            className="pic-class"
            src="http://i63.tinypic.com/5ov87b.png"
          />
          <div className="time-label" />
        </div>

        <div className="video-info">
          <div className="video-preview-metadata-container">
            <div className="semi-bold show-max-two-lines">
              {this.props.title}
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}
