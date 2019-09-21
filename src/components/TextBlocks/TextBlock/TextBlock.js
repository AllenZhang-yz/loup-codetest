import React from 'react';
import parse from 'html-react-parser';
import './TextBlock.scss';

// const TextBlock = props => <div className="textblock">{props.children}</div>;
const TextBlock = props => {
  const textBlockContent = props.textBlockContent;
  return (
    <div className="textblock-container">
      <div className="textblock-container__images-by">
        images by: extra caption
      </div>
      <div className="textblock-container__textblock">
        {parse(textBlockContent)}
      </div>
    </div>
  );
};

export default TextBlock;
