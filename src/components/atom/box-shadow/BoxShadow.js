import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './BoxShadow.module.scss';

const BoxShadow = ({ level, children }) => {
  const classes = classNames({
    [css[`elevation--4dp`]]: level === 4,
    [css[`elevation--8dp`]]: level === 8,
    [css[`elevation--16dp`]]: level === 16,
    [css[`elevation--24dp`]]: level === 24,
    [css[`elevation--32dp`]]: level === 32
  });

  return <div className={classes}>{children}</div>;
};

BoxShadow.propTypes = {
  level: PropTypes.oneOf([4, 8, 16, 24, 32]).isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

BoxShadow.defaultProps = {
  children: null
};

export default BoxShadow;
