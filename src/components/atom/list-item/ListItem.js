import React from 'react';
import PropTypes from 'prop-types';

import css from './ListItem.module.scss';

const ListItem = ({ children }) => {
  return <li className={css['c-list-item']}>{children}</li>;
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

ListItem.defaultProps = {
  children: null
};

export default ListItem;
