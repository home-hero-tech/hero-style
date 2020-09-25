import React from 'react';
import PropTypes from 'prop-types';

import css from './Dropdown.module.scss';

const Dropdown = ({ children, ...otherProps }) => (
  <div className={css['c-dropdown']} {...otherProps}>
    {children}
  </div>
);

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired
};

Dropdown.defaultProps = {};

export default Dropdown;
