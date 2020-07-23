import './VideoItem.css';
import React from 'react';

const VideoItem = props => {
  const { title, thumbnails } = props.video.snippet;
  const { onVideoSelect } = props;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(props.video)}>
      <img
        className="ui image"
        src={thumbnails.medium.url}
        alt={`${title} thumbnail`}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
