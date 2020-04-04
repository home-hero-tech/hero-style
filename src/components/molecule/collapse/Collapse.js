import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Collapse.module.scss';

const Collapse = ({ isOpen, children }) => {
  const classes = classNames({
    [css['c-collapse']]: true,
    [css['c-collapse--open']]: isOpen
  });

  return (
    <div className={classes}>
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
