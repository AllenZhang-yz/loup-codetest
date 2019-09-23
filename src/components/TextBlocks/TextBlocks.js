import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextBlock from './TextBlock';

const TextBlocks = props => {
  const textBlockContents = props.textBlockContents;
  return (
    <Fragment>
      {textBlockContents.map((textBlockContent, index) => (
        <TextBlock key={index} textBlockContent={textBlockContent} />
      ))}
    </Fragment>
  );
};

TextBlocks.propTypes = {
  textBlockContents: PropTypes.array
};

export default TextBlocks;
