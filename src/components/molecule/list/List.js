import React from 'react';

import PropTypes from 'prop-types';

import css from './List.module.scss';

const List = ({ children }) => <ul className={css['c-list']}>{children}</ul>;

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

List.defaultProps = {
  children: null
};

export default List;
