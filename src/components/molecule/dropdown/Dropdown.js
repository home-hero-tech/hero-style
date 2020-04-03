import React from 'react';
import PropTypes from 'prop-types';

import css from './Dropdown.module.scss';

const Dropdown = ({ onClick, children }) => {

  return <div className={css['c-dropdown']} onClick={onClick}>{children}</div>;
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func
};

Dropdown.defaultProps = {
  onClick: null
};

export default Dropdown;
