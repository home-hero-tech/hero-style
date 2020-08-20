import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, ...otherProps }) => (
  <form noValidate {...otherProps}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired,
  autoComplete: PropTypes.oneOf(['off', 'on']),
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
};

Form.defaultProps = {
  className: null,
  autoComplete: 'off'
};

export default Form;
