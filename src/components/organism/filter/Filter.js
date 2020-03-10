import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.scss';

const Filter = ({ onSubmit, children }) => (
  <div className={css['c-filter']}>
    <div className={css['header']}></div>
    <div>
      {children}
    </div>
  </div>
);

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};

Filter.defaultProps = {};

export default Filter;