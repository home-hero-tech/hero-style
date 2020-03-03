import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Label from '../../atom/label/Label';
import Input from '../../atom/input/Input';

import css from './FormGroup.module.scss';

const FormGroup = ({ id, name, type, placeholder, label, success, error, message }) => {
  const classes = classNames({
    [css['c-form-group']]: true,
    [css['c-form-group--error']]: error,
    [css['c-form-group--success']]: success
  });

  return <div className={classes}>
    <Label name={name}>{label}</Label>
    <Input id={id} name={name} type={type} placeholder={placeholder}></Input>
    {message ? <small>{message}</small> : null }
  </div>;
};

FormGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string
};
FormGroup.defaultProps = {
  id: null,
  name: null,
  type: 'text',
  placeholder: null,
  success: false,
  error: false,
  message: null
};

export default FormGroup;