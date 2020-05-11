import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Text.module.scss';

const Text = ({
  center,
  children,
  danger,
  end,
  fill,
  grayLight,
  lg,
  primary,
  sm,
  success,
  uppercase,
  warning,
  xs,
  ellipsis
}) => {
  const classes = classNames({
    [css['c-text']]: true,
    [css['c-text--center']]: center,
    [css['c-text--danger']]: danger,
    [css['c-text--ellipsis']]: ellipsis,
    [css['c-text--end']]: end,
    [css['c-text--fill']]: fill,
    [css['c-text--gray-light']]: grayLight,
    [css['c-text--lg']]: lg,
    [css['c-text--primary']]: primary,
    [css['c-text--sm']]: sm,
    [css['c-text--uppercase']]: uppercase,
    [css['c-text--success']]: success,
    [css['c-text--warning']]: warning,
    [css['c-text--xs']]: xs
  });

  return <p className={classes}>{children}</p>;
};

Text.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]),
  danger: PropTypes.bool,
  ellipsis: PropTypes.bool,
  end: PropTypes.bool,
  fill: PropTypes.bool,
  grayLight: PropTypes.bool,
  lg: PropTypes.bool,
  primary: PropTypes.bool,
  sm: PropTypes.bool,
  success: PropTypes.bool,
  uppercase: PropTypes.bool,
  warning: PropTypes.bool,
  xs: PropTypes.bool
};

Text.defaultProps = {
  center: false,
  children: null,
  danger: false,
  ellipsis: false,
  end: false,
  fill: false,
  grayLight: false,
  lg: false,
  primary: false,
  sm: false,
  success: false,
  uppercase: false,
  warning: false,
  xs: false
};

export default Text;
