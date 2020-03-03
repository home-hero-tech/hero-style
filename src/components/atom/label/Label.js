import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ name, children }) => {
  return <label htmlFor={name}>{children}</label>;
};

Label.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string.isRequired
};
Label.defaultProps = {
  name: null
};

export default Label;