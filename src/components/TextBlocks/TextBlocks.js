import React, { Fragment } from 'react';
import TextBlock from './TextBlock';

const TextBlocks = props => {
  const textBlockContents = props.textBlockContents;
  return (
    <Fragment>
      {textBlockContents.map(textBlockContent => (
        <TextBlock
          key={textBlockContent.slice(0, 5)}
          textBlockContent={textBlockContent}
        />
      ))}
    </Fragment>
  );
};

export default TextBlocks;
