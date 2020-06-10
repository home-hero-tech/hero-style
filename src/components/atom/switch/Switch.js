import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSwitch from 'react-switch';

import css from './Switch.module.scss';

const Switch = ({ className, checked, ...otherProps }) => {
  const classes = classNames(css['c-switch'], className, {
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

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string
};

Switch.defaultProps = {
  checked: false,
  className: ''
};

export default Switch;
