import React from 'react';
import RDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import css from './DatePicker.module.scss';
import cssInput from '../input/Input.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selected, format, onChange, ...otherProps }) => (
  <div className={css['c-datepicker']}>
    <RDatePicker
      selected={selected}
      format={format}
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
      className={cssInput['c-input']}
      calendarClassName={cssInput['c-calendar']}
      {...otherProps}
    />
  </div>
);

DatePicker.propTypes = {
  format: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.instanceOf(Date)
};

DatePicker.defaultProps = {
  format: 'MM/dd/yyyy',
  onChange: f => f,
  selected: new Date()
};

export default DatePicker;
