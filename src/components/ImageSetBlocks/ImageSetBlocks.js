import React, { Fragment } from 'react';
import ImageSetBlock from './ImageSetBlock';

const ImageSetBlocks = props => {
  const imageBlockContents = props.imageBlockContents;
  return (
    <Fragment>
      {imageBlockContents.map(imageBlockContent => (
        <ImageSetBlock
          key={Math.random()}
          imageBlockContent={imageBlockContent}
        />
      ))}
    </Fragment>
  );
};

export default ImageSetBlocks;
