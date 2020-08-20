import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Input.module.scss';

const Input = ({ id, name, type, placeholder, onChange, disabled, dark, parentRef, small, icon, ...otherProps }) => {
  const isCheckOrRadio = type === 'checkbox' || type === 'radio';

  const classes = classNames({
    [css['c-input']]: true,
    [css['c-input--disabled']]: disabled,
    [css[`c-input__${type}`]]: isCheckOrRadio,
    [css[`c-input__${type}--small`]]: !!isCheckOrRadio && small,
    [css[`c-input__${type}--disabled`]]: disabled && isCheckOrRadio,
    [css['c-input--dark']]: dark,
    [css['c-input--small']]: small && !isCheckOrRadio
  });

  const classesWrapper = classNames({
    [css['c-input-wrapper']]: true,
    [css['c-input-wrapper__icon']]: !!icon,
    [css['c-input-wrapper__icon--small']]: !!icon && !!small
  });

  return (
    <div className={classesWrapper}>
      {icon || null}
      <input
        className={classes}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        ref={parentRef}
        {...otherProps}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  dark: PropTypes.bool,
  parentRef: PropTypes.func,
  icon: PropTypes.instanceOf(Object)
};

Input.defaultProps = {
  id: null,
  name: null,
  onChange: f => f,
  placeholder: null,
  type: 'text',
  disabled: null,
  small: null,
  dark: null,
  parentRef: null,
  icon: null
};

Input.displayName = 'Input';

export default Input;
