import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Card.module.scss';

const Card = ({ className, border, children, ...otherProps }) => {
  const classes = classNames({
    [css['c-card']]: true,
    [css['c-card--borderless']]: !border,
    [className]: !!className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Card.defaultProps = {
  className: '',
  border: true,
  children: null
};

export default Card;
