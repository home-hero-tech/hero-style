import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CardHeader.module.scss';

const CardHeader = ({ className, children }) => {
  const classes = classNames({
    [css['c-card__header']]: true,
    [className]: !!className
  });

  return <div className={classes}>{children}</div>;
};

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

CardHeader.defaultProps = {
  className: '',
  children: null
};

export default CardHeader;
