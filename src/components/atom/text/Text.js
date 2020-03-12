import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Text.module.scss';

const Text = ({ center, end, children }) => {
  const classes = classNames({
    [css['c-text']]: true,
    [css['c-text--center']]: center,
    [css['c-text--end']]: end
  });

  return <p className={classes}>{children}</p>;
};

Text.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.string,
  end: PropTypes.bool
};

Text.defaultProps = {
  center: false,
  children: null,
  end: false
};

export default Text;
