import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSwitch from 'react-switch';

import './Switch.scss';

const Switch = ({ className, checked, ...otherProps }) => {
  const classes = classNames('c-switch', className, {
    'c-switch--active': checked
  });
  return (
    <ReactSwitch
      className={classes}
      checkedIcon={false}
      uncheckedIcon={false}
      handleDiameter={18}
      height={11}
      width={26}
      checked={checked}
      {...otherProps}
    />
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
