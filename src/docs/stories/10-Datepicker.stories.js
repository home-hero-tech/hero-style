import React, { useState } from 'react';
import DatePickerWrapper from "../../wrappers/DatePickerWrapper";

import "react-datepicker/dist/react-datepicker.css";

export default {
  title: 'DatePicker',
  component: DatePickerWrapper
};


export const Default = () => (
  <DatePickerWrapper/>
);
