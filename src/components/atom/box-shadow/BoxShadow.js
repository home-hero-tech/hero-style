import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './BoxShadow.module.scss';

const BoxShadow = ({ level, children }) => {
  const classes = classNames({
    [css['elevation--1']]: level === 1,
    [css['elevation--2']]: level === 2,
    [css['elevation--3']]: level === 3,
    [css['elevation--4']]: level === 4,
    [css['elevation--5']]: level === 5
  });

  return <div className={classes}>{children}</div>;
};

BoxShadow.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

BoxShadow.defaultProps = {
  children: null
};

export default BoxShadow;
