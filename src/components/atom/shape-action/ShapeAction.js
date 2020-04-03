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
      <button className={classes} {...otherProps}>
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
  isButton: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'success', 'danger']),
  fill: PropTypes.oneOf(['primary', 'success', 'danger']),
  shape: PropTypes.oneOf(['squared', 'rounded']),
  size: PropTypes.oneOf([1, 2, 3, 4]),
  isLink: PropTypes.bool
};
ShapeAction.defaultProps = {
  children: null,
  isButton: false,
  fill: null,
  type: null,
  shape: 'squared',
  size: 1,
  isLink: false
};
ShapeAction.displayName = 'ShapeAction';

export default ShapeAction;
