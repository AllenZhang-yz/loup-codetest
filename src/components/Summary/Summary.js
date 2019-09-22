import React from 'react';
import PropTypes from 'prop-types';
import './Summary.scss';

const Summary = props => <div className="summary">{props.children}</div>;

Summary.propTypes = {
  children: PropTypes.string
};

export default Summary;
