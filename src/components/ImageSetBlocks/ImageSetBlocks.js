import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageSetBlock from './ImageSetBlock';

const ImageSetBlocks = props => {
  const imageBlockContents = props.imageBlockContents;
  return (
    <Fragment>
      {imageBlockContents.map((imageBlockContent, index) => (
        <ImageSetBlock key={index} imageBlockContent={imageBlockContent} />
      ))}
    </Fragment>
  );
};

ImageSetBlocks.propTypes = {
  imageBlockContents: PropTypes.array
};

export default ImageSetBlocks;
