import React from 'react';

const ImageList = props => {
  const { images } = props;
  console.log(images);

  const imageList = images.map(image => {
    return <img src={image.urls.regular} alt={image.alt_description} />;
  });

  return <div>{imageList}</div>;
};

export default ImageList;
