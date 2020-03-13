import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './BoxShadow.module.scss';

const BoxShadow = ({ level, radius, children }) => {
  const classes = classNames({
    [css['elevation--1']]: level === 1,
    [css['elevation--2']]: level === 2,
    [css['elevation--3']]: level === 3,
    [css['elevation--4']]: level === 4,
    [css['elevation--5']]: level === 5,
    [css[`c-box-shadow--radius-${radius}`]]: true
  });

  return <div className={classes}>{children}</div>;
};

BoxShadow.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  radius: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

BoxShadow.defaultProps = {
  children: null,
  radius: 2
};

export default BoxShadow;
