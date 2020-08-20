import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CardHeader.module.scss';

const CardHeader = ({ className, size, children }) => {
  const classes = classNames({
    [css['c-card__header']]: true,
    [css[`c-card__header--${size}`]]: true,
    [className]: !!className
  });

  return <div className={classes}>{children}</div>;
};

CardHeader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small']),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
};

CardHeader.defaultProps = {
  className: '',
  size: 'default',
  children: null
};

export default CardHeader;
