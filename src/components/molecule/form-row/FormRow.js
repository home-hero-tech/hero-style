import React from 'react';
import PropTypes from 'prop-types';

import css from './FormRow.module.scss';

const FormRow = ({ children }) => {
  return <div className={css['c-form-row']}>{children}</div>;
};

FormRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default FormRow;
