import React from 'react';
import classNames from 'classnames';
import css from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ id, name, type, placeholder, value, onChange, disabled }) => {
  const isCheckOrRadio = type === 'checkbox' || type === 'radio';

  const classes = classNames({
    [css['c-input']]: true,
    [css['c-input--disabled']]: disabled,
    [css[`c-input__${type}`]]: isCheckOrRadio,
    [css[`c-input__${type}--disabled`]]: disabled && isCheckOrRadio
  });

  return <input
    className={classes}
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool
};

Input.defaultProps = {
  id: null,
  name: null,
  onChange: f => f,
  placeholder: null,
  type: 'text',
  value: null,
  disabled: null
};

export default Input;
