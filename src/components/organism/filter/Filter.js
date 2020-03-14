import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.scss';

const Filter = ({ children }) => {
  return (
    <div className={css['c-filter']}>
      <form>{children}</form>
    </div>
  );
};

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};

Filter.defaultProps = {};

export default Filter;
