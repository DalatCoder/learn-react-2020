import './VideoItem.css';
import React from 'react';

const VideoItem = props => {
  const { title, thumbnails } = props.video.snippet;

  return (
    <div className="video-item item">
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
