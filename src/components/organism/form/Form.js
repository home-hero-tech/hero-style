import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} noValidate>{children}</form>
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {};

export default Form;
