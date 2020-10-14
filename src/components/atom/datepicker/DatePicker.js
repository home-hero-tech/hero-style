import React from 'react';
import RDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './DatePicker.module.scss';
import cssInput from '../input/Input.module.scss';

const DatePicker = ({ selected, format, onChange, dark, small, ...otherProps }) => {
  const className = classNames({
    [css['c-datepicker']]: true,
    [css['c-datepicker--dark']]: dark,
    [css['c-datepicker--small']]: small
  });

  const classes = classNames({
    [cssInput['c-input']]: true,
    [cssInput['c-input--dark']]: dark,
    [cssInput['c-input--small']]: small
  });

  return (
    <div className={className}>
      <RDatePicker
        selected={selected}
        dateFormat={format}
        onChange={onChange}
        popperModifiers={{
          offset: {
            enabled: true
          },
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport'
          }
        }}
        showPopperArrow={false}
        className={classes}
        calendarClassName={cssInput['c-calendar']}
        {...otherProps}
      />
    </div>
  );
};

DatePicker.propTypes = {
  format: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.instanceOf(Date),
  dark: PropTypes.bool,
  small: PropTypes.bool
};

DatePicker.defaultProps = {
  format: 'dd/MM/yyyy',
  onChange: f => f,
  selected: null,
  dark: false,
  small: false
};

export default DatePicker;
