import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './DropdownMenu.module.scss';

const DropdownMenu = ({ onLeave, above, below, children }) => {
   const classes = classNames({
    [css['c-dropdown-menu']]: true,
    [css['c-dropdown-menu--above']]: above,
    [css['c-dropdown-menu--below']]: below
  });

  return <div className={classes} onMouseLeave={onLeave}>{children}</div>;
};

DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  onLeave: PropTypes.func,
  above: PropTypes.bool,
  below: PropTypes.bool
};

DropdownMenu.defaultProps = {
  onLeave: null,
  above: false,
  below: false
};

export default DropdownMenu;
