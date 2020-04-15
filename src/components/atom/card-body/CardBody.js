import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CardBody.module.scss';

const CardBody = ({ className, children }) => {
  const classes = classNames({
    [css['c-card__body']]: true,
    [className]: !!className
  });

  return <div className={classes}>{children}</div>;
};

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

CardBody.defaultProps = {
  className: '',
  children: null
};

export default CardBody;
