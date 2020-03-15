import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Input.module.scss';

const Input = ({
  id,
  name,
  type,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled,
  dark,
  ...otherProps
}) => {
  const isCheckOrRadio = type === 'checkbox' || type === 'radio';

  const classes = classNames({
    [css['c-input']]: true,
    [css['c-input--disabled']]: disabled,
    [css[`c-input__${type}`]]: isCheckOrRadio,
    [css[`c-input__${type}--disabled`]]: disabled && isCheckOrRadio,
    [css['c-input--dark']]: dark
  });

  return defaultValue ? (
    <input
      className={classes}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      {...otherProps}
    />
  ) : (
    <input
      className={classes}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  dark: PropTypes.bool
};

Input.defaultProps = {
  id: null,
  name: null,
  onChange: f => f,
  placeholder: null,
  type: 'text',
  value: null,
  defaultValue: null,
  disabled: null,
  dark: null
};

export default Input;
