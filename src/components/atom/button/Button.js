import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './Button.module.scss';

/* <Button type="primary" container="outlined" shape="squared" size="" /> */

const Button = ({ shape, size, container, type, children }) => {
  const classes = classNames({
    [css['c-btn']]: true,
    [css[`c-btn--size-${size}`]]: true,
    [css[`c-btn--${type}`]]: true,
    [css[`c-btn--${shape}`]]: true,
    [css[`c-btn--${container}`]]: true
  });
  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'success'
  ]),
  size: PropTypes.oneOf([1, 2, 3, 4]),
  container: PropTypes.oneOf(['default', 'outlined', 'text']),
  shape: PropTypes.oneOf(['squared', 'rounded'])
};

Button.defaultProps = {
  type: 'default',
  container: 'default',
  shape: 'rounded',
  size: 1
};

export default Button;
