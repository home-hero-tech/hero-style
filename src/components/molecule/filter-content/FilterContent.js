import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/filter/Filter.module.scss';

const FilterContent = ({ showFilters, children }) => (
  <>
    {showFilters ? (
      <div className={css['c-filter__content']}>{children}</div>
    ) : null}
  </>
);

FilterContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  showFilters: PropTypes.bool
};

FilterContent.defaultProps = {
  showFilters: false
};

export default FilterContent;
