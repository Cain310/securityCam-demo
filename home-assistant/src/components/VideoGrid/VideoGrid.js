import React from "react";
import "./VideoGrid.scss";
import { Divider } from "semantic-ui-react";
import { VideoPreview } from "../VideoPreview/VideoPreview";

const VideoGrid = props => {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
      {/* <h4>Saved Videos</h4> */}
      <div className="video-grid">
        {props.videos.map(video => (
          <div key={video.Key}>
            <VideoPreview title={video.Key} />
          </div>
        ))}
      </div>
      {divider}
    </React.Fragment>
  );
};
export default VideoGrid;
