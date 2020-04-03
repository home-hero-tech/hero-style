import React from 'react';
import PropTypes from 'prop-types';

import css from './Collapse.module.scss';

const Collapse = ({ isOpen, children }) => {
  return (
    <div className={css[`c-collapse${isOpen ? '--open' : ''}`]}>
      <div className={css[`c-collapse__content`]}>{children}</div>
    </div>
  );
};

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.instanceOf(Object).isRequired
};

Collapse.defaultProps = {
  isOpen: false
};

export default Collapse;
