import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../loader/Loader';

import css from './Button.module.scss';

const Button = ({
  onClick,
  submit,
  shape,
  size,
  container,
  type,
  children,
  disabled,
  loading,
  noShadow,
  hasSVG,
  fullWidth,
  className
}) => {
  const btnType = submit ? 'submit' : 'button';

  const classes = classNames(
    {
      [css['c-btn']]: true,
      [css.ripple]: true,
      [css[`c-btn--${type}`]]: true,
      [css[`c-btn--${shape}`]]: true,
      [css[`c-btn--${container}`]]: true,
      [css[`c-btn--size-${size}`]]: true,
      [css['c-btn--no-shadow']]: !!noShadow,
      [css['c-btn--has-svg']]: !!hasSVG,
      [css['c-btn--full-width']]: fullWidth
    },
    className
  );

  return (
    <button
      disabled={disabled}
      type={btnType}
      className={classes}
      onClick={onClick}
    >
      {loading ? <Loader small={size <= 2} /> : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
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
  shape: PropTypes.oneOf(['squared', 'rounded']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  noShadow: PropTypes.bool,
  hasSVG: PropTypes.bool,
  fullWidth: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  onClick: null,
  submit: false,
  type: 'default',
  container: 'default',
  shape: 'rounded',
  size: 2,
  loading: false,
  disabled: false,
  noShadow: false,
  hasSVG: false,
  fullWidth: false
};

export default Button;
