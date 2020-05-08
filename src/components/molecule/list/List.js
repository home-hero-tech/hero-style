import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import css from './List.module.scss';

const List = ({ level, children, style }) => {
  const classes = classNames({
    [css['c-list']]: true,
    [css[`c-list--${level}`]]: true
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

List.defaultProps = {
  children: null,
  level: 1,
  style: null
};

export default List;
