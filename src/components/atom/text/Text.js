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
  grayVal,
  lg,
  primary,
  sm,
  success,
  uppercase,
  warning,
  xs,
  ellipsis,
  thin,
  regular,
  bold
}) => {
  const classes = classNames({
    [css['c-text']]: true,
    [css['c-text--center']]: center,
    [css['c-text--danger']]: danger,
    [css['c-text--ellipsis']]: ellipsis,
    [css['c-text--end']]: end,
    [css['c-text--fill']]: fill,
    [css[`c-text--gray-${grayVal}`]]: !!grayVal,
    [css['c-text--lg']]: lg,
    [css['c-text--primary']]: primary,
    [css['c-text--sm']]: sm,
    [css['c-text--uppercase']]: uppercase,
    [css['c-text--success']]: success,
    [css['c-text--warning']]: warning,
    [css['c-text--xs']]: xs,
    [css['c-text--thin']]: thin,
    [css['c-text--regular']]: regular,
    [css['c-text--bold']]: bold
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
  grayVal: PropTypes.string,
  lg: PropTypes.bool,
  primary: PropTypes.bool,
  regular: PropTypes.bool,
  sm: PropTypes.bool,
  success: PropTypes.bool,
  thin: PropTypes.bool,
  bold: PropTypes.bool,
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
  grayVal: null,
  lg: false,
  primary: false,
  regular: false,
  sm: false,
  success: false,
  thin: false,
  bold: false,
  uppercase: false,
  warning: false,
  xs: false
};

export default Text;
