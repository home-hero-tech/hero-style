import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ name, children }) => <label htmlFor={name}>{children}</label>;

Label.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string
};

Label.defaultProps = {
  name: null
};

export default Label;
