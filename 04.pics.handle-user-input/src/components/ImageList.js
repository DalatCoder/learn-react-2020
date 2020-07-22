import './ImageList.css';
import React from 'react';

const ImageList = props => {
  const { images } = props;

  const imageList = images.map(({ id, urls, alt_description }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
