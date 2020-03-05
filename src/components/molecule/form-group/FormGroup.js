import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Label from '../../atom/label/Label';
import Input from '../../atom/input/Input';

import css from './FormGroup.module.scss';

const FormGroup = ({
  id,
  name,
  type,
  placeholder,
  label,
  success,
  error,
  message,
  value,
  onChange
}) => {
  const classes = classNames({
    [css['c-form-group']]: true,
    [css['c-form-group--error']]: error,
    [css['c-form-group--success']]: success
  });

  return (
    <div className={classes}>
      <Label name={name}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {message ? <small>{message}</small> : null}
    </div>
  );
};

FormGroup.propTypes = {
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  success: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FormGroup.defaultProps = {
  error: false,
  id: null,
  label: null,
  message: null,
  name: null,
  onChange: f => f,
  placeholder: null,
  success: false,
  type: 'text',
  value: null
};

export default FormGroup;
