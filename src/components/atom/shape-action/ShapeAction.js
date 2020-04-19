import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './ShapeAction.module.scss';

const ShapeAction = ({
  type,
  shape,
  fill,
  size,
  isButton,
  isLink,
  children,
  submit,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-shape-action']]: true,
    [css['c-shape-action--is-link']]: isLink,
    [css[`c-shape-action--${type}`]]: type,
    [css[`c-shape-action--fill-${fill}`]]: fill,
    [css[`c-shape-action--${shape}`]]: shape,
    [css[`c-shape-action--size-${size}`]]: size
  });

  if (isButton && !isLink) {
    return (
      <button
        className={classes}
        type={submit ? 'submit' : 'button'}
        {...otherProps}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={classes} {...otherProps}>
      {children}
    </span>
  );
};

ShapeAction.propTypes = {
  children: PropTypes.instanceOf(Object),
  fill: PropTypes.oneOf(['primary', 'success', 'danger', 'gray-light']),
  isButton: PropTypes.bool,
  isLink: PropTypes.bool,
  shape: PropTypes.oneOf(['squared', 'rounded']),
  size: PropTypes.oneOf([0, 1, 2, 3, 4]),
  submit: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'gray-light', 'white'])
};
ShapeAction.defaultProps = {
  submit: false,
  children: null,
  fill: null,
  isButton: false,
  isLink: false,
  shape: 'squared',
  size: 1,
  type: null
};
ShapeAction.displayName = 'ShapeAction';

export default ShapeAction;
