import React, { Fragment } from "react";
import parse from "html-react-parser";
import "./TextBlock.scss";

// const TextBlock = props => <div className="textblock">{props.children}</div>;
const TextBlock = props => {
  const textBlockContent = props.textBlockContent;
  return (
    <Fragment>
      <div className="images-by">images by: extra caption</div>
      <div className="textblock">{parse(textBlockContent)}</div>
    </Fragment>
  );
};

export default TextBlock;
