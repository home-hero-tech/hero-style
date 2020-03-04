import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './Button.module.scss';

const Button = ({ primary, success, danger, children }) => {
  const classes = classNames({
    [css['c-btn']]: true,
    [css['c-btn--primary']]: primary,
    [css['c-btn--danger']]: danger,
    [css['c-btn--success']]: success
  });
  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool
};
Button.defaultProps = {
  danger: false,
  primary: false,
  success: false
};

export default Button;
