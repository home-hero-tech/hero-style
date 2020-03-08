import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './FormGroup.module.scss';

const FormGroup = ({ success, error, children }) => {
  const classes = classNames({
    [css['c-form-group']]: true,
    [css['c-form-group--error']]: error,
    [css['c-form-group--success']]: success
  });

  return <div className={classes}>{children}</div>;
};

FormGroup.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  children: PropTypes.instanceOf(Array)
};
FormGroup.defaultProps = {
  error: false,
  success: false,
  children: null
};

export default FormGroup;
