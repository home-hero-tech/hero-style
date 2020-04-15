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
    [css['c-text--primary']]: primary,
    [css['c-text--success']]: success,
    [css['c-text--danger']]: danger,
    [css['c-text--warning']]: warning,
    [css['c-text--fill']]: fill,
    [css['c-text--end']]: end,
    [css['c-text--lg']]: lg,
    [css['c-text--sm']]: sm,
    [css['c-text--xs']]: xs,
    [css['c-text--uppercase']]: uppercase,
    [css['c-text--ellipsis']]: ellipsis
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
  end: PropTypes.bool,
  fill: PropTypes.bool,
  lg: PropTypes.bool,
  primary: PropTypes.bool,
  sm: PropTypes.bool,
  success: PropTypes.bool,
  uppercase: PropTypes.bool,
  warning: PropTypes.bool,
  xs: PropTypes.bool,
  ellipsis: PropTypes.bool
};

Text.defaultProps = {
  center: false,
  children: null,
  danger: false,
  end: false,
  fill: false,
  lg: false,
  primary: false,
  sm: false,
  success: false,
  uppercase: false,
  warning: false,
  xs: false,
  ellipsis: false
};

export default Text;
