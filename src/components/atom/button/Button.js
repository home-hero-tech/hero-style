import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './Button.module.scss';

/* <Button type="primary" container="outlined" shape="squared" size="" /> */

const Button = ({ onClick, submit, shape, size, container, type, children }) => {
  const btnType = submit ? 'submit' : 'button';

  const classes = classNames({
    [css['c-btn']]: true,
    [css[`c-btn--${type}`]]: true,
    [css[`c-btn--${shape}`]]: true,
    [css[`c-btn--${container}`]]: true,
    [css[`c-btn--size-${size}`]]: true
  });

  return (
    <button type={btnType} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'success'
  ]),
  submit: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4]),
  container: PropTypes.oneOf(['default', 'outlined', 'text']),
  shape: PropTypes.oneOf(['squared', 'rounded'])
};

Button.defaultProps = {
  submit: false,
  type: 'default',
  container: 'default',
  shape: 'rounded',
  size: 2
};

export default Button;
