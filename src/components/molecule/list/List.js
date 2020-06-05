import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import css from './List.module.scss';

const List = ({ level, children, style, clickable }) => {
  const classes = classNames({
    [css['c-list']]: true,
    [css[`c-list--${level}`]]: true,
    [css[`c-list--clickable`]]: clickable
  });

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  level: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  clickable: PropTypes.bool
};

List.defaultProps = {
  children: null,
  level: 1,
  style: null,
  clickable: false
};

export default List;
