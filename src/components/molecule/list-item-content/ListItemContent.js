import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import css from './ListItemContent.module.scss';

const ListItemContent = ({ isAction, border, children }) => {
  const classes = classNames({
    [css['c-list-item-content']]: true,
    [css['c-list-item-content__default']]: !isAction,
    [css['c-list-item-content__default--border']]: border,
    [css['c-list-item-content__action']]: isAction
  });

  return <div className={classes}>{children}</div>;
};

ListItemContent.propTypes = {
  border: PropTypes.bool,
  isAction: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
ListItemContent.defaultProps = {
  border: false,
  isAction: false,
  children: null
};
ListItemContent.displayName = 'ListItemContent';

export default ListItemContent;
