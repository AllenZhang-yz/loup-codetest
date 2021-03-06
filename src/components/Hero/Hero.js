import React from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';
import { ReactComponent as AddToFav } from '../../assets/svg/mobile-dark-header.svg';

const Hero = props => {
  const author = props.authors[0];
  const { name, imageList } = author;
  const title = props.title;
  const image1x = imageList.square1x.url;
  const image2x = imageList.square2x.url;
  const image3x = imageList.square3x.url;

  return (
    <div className="mainpic">
      <div className="mainpic__title">{title}</div>
      <p className="mainpic__para">
        The breakfast collection that you must get into this spring
        <AddToFav className="mainpic__para__addtofav" />
      </p>

      <div className="mainpic__author-container">
        <img
          src={image1x}
          srcSet={image2x + ' 2x,' + image3x + '3x'}
          alt="tag"
          className="mainpic__author-container__tag"
        />
        <span className="mainpic__author-container__name">{name}</span>
        <span className="mainpic__author-container__date">
          <i>24 January 2018</i>
        </span>
      </div>
    </div>
  );
};

Hero.propTypes = {
  authors: PropTypes.array,
  title: PropTypes.string
};

export default Hero;
