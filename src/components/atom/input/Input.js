import React from 'react';
import classNames from 'classnames';
import css from './Input.module.scss';

const Input = (props) => {
  const {disabled, type} = props;
  const isCheckOrRadio = type==='checkbox' || type==='radio';

  const classes = classNames({
    [css['c-input']]: true,
    [css['c-input--disabled']]: disabled,
    [css[`c-input__${type}`]]: isCheckOrRadio,
    [css[`c-input__${type}--disabled`]]: disabled && isCheckOrRadio
  });

  return <input
    className={classes}
    {...props}
  />
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
