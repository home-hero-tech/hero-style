import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Text.module.scss';

const Text = ({ center, lg, sm, xs, uppercase, end, children }) => {
  const classes = classNames({
    [css['c-text']]: true,
    [css['c-text--center']]: center,
    [css['c-text--end']]: end,
    [css['c-text--lg']]: lg,
    [css['c-text--sm']]: sm,
    [css['c-text--xs']]: xs,
    [css['c-text--uppercase']]: uppercase
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
  end: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  uppercase: PropTypes.bool,
  xs: PropTypes.bool
};

Text.defaultProps = {
  center: false,
  children: null,
  end: false,
  lg: false,
  sm: false,
  uppercase: false,
  xs: false
};

export default Text;
