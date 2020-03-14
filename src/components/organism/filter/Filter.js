import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.scss';

const Filter = ({ onSubmit, children }) => {
  return (
    <div className={css['c-filter']}>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  onSubmit: PropTypes.func
};

Filter.defaultProps = {
  onSubmit: null
};

export default Filter;
