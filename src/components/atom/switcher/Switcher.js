import React from 'react';
import ReactSwitch from 'react-switch';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Switch.module.scss';

const Switcher = ({ checked, ...otherProps }) => {
  const classes = classNames({
    [css['c-switch']]: true,
    [css['c-switch--active']]: checked
  });

  return (
    <div className={classes}>
      <ReactSwitch
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={18}
        height={11}
        width={26}
        checked={checked}
        {...otherProps}
      />
    </div>
  );
};

Switcher.propTypes = {
  checked: PropTypes.bool
};
Switcher.defaultProps = {
  checked: false
};
Switcher.displayName = 'Switcher';

export default Switcher;
