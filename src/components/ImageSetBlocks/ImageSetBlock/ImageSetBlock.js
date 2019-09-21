import React from 'react';
import parse from 'html-react-parser';
import './ImageSetBlock.scss';

const ImageSetBlock = props => {
  const imageBlockContent = props.imageBlockContent;
  const { imageList, summary } = imageBlockContent[0];
  const landscapeMobile2x = imageList.landscapemobile2x.url;

  return (
    <div className="imagesetblock">
      <img
        src={landscapeMobile2x}
        alt="imageSetBlock"
        className="imagesetblock__image"
      />
      <div className="imagesetblock__summary">{parse(summary)}</div>
    </div>
  );
};

export default ImageSetBlock;
