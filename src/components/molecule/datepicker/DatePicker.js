import React from 'react';
import RDatePicker from "react-datepicker";
import css from './DatePicker.module.scss';
import cssInput from '../../atom/input/Input.module.scss';


const DatePicker = (props) => {
  return <div className={css['c-datepicker']}>
    <RDatePicker
      {...props}
      showPopperArrow={false}
      className={cssInput['c-input']}
      calendarClassName={cssInput['c-calendar']}
    >
    </RDatePicker>
  </div>
};

export default DatePicker;