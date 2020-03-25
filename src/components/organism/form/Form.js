import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, className, children }) => (
  <form onSubmit={onSubmit} className={className} noValidate>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
};

Form.defaultProps = {
  className: null
};

export default Form;
