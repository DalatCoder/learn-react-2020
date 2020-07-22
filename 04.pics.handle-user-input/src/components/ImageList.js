import React from 'react';

const ImageList = props => {
  const { images } = props;
  console.log(images);

  const imageList = images.map(({ id, urls, alt_description }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });

  return <div>{imageList}</div>;
};

export default ImageList;
