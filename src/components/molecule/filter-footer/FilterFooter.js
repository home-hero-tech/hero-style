import React from 'react';
import PropTypes from 'prop-types';

import css from './FilterFooter.module.scss';

const FilterFooter = ({ children }) => (
  <div className={css['c-filter-footer']}>
    {children}
  </div>
);

FilterFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default FilterFooter;
