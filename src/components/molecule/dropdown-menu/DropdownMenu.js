import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './DropdownMenu.module.scss';

const DropdownMenu = ({ onLeave, above, below, before, rightInside, children, ...otherProps }) => {
  const classes = classNames({
    [css['c-dropdown-menu']]: true,
    [css['c-dropdown-menu--above']]: above,
    [css['c-dropdown-menu--below']]: below,
    [css['c-dropdown-menu--before']]: before,
    [css['c-dropdown-menu--right-inside']]: rightInside
  });

  return (
    <div className={classes} onMouseLeave={onLeave} {...otherProps}>
      {children}
    </div>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
  onLeave: PropTypes.func,
  above: PropTypes.bool,
  below: PropTypes.bool,
  rightInside: PropTypes.bool,
  before: PropTypes.bool
};

DropdownMenu.defaultProps = {
  onLeave: null,
  above: false,
  below: false,
  rightInside: false,
  before: false
};

export default DropdownMenu;
