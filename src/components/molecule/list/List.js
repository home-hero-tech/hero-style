import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import css from './List.module.scss';

const List = ({ level, children }) => {

  const classes = classNames({
    [css['c-list']]: true,
    [css[`c-list--${level}`]]: true
  });

  return <ul className={classes}>
    {children}
  </ul>;
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  level: PropTypes.number
};

List.defaultProps = {
  children: null,
  level: 1
};

export default List;
