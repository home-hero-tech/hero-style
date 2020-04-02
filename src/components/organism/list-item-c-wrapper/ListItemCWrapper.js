import React from 'react';
import PropTypes from 'prop-types';

import css from './ListItemCWrapper.module.scss';

const ListItemCWrapper = ({ children }) => (
  <div className={css['c-wrapper']}>{children}</div>
);

ListItemCWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
ListItemCWrapper.defaultProps = {};
ListItemCWrapper.displayName = 'ListItemCWrapper';

export default ListItemCWrapper;
