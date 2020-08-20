import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/filter/Filter.module.scss';

const FilterFooter = ({ showFilters, children }) => (
  <>{showFilters ? <div className={css['c-filter__footer']}>{children}</div> : null}</>
);

FilterFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
  showFilters: PropTypes.bool
};

FilterFooter.defaultProps = {
  showFilters: false
};

export default FilterFooter;
