import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import css from './ListItemCWrapper.module.scss';

const ListItemCWrapper = ({ children }) => {
  const classes = classNames({
    [css['c-wrapper']]: true
  });
  return <div className={classes}>{children}</div>;
};

ListItemCWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
ListItemCWrapper.defaultProps = {};
ListItemCWrapper.displayName = 'ListItemCWrapper';

export default ListItemCWrapper;
