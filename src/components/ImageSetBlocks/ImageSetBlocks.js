import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

ImageSetBlocks.propTypes = {
  imageBlockContents: PropTypes.array
};

export default ImageSetBlocks;
