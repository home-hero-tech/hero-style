import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.scss';

console.log(css)

const Input = ({ id, name, type, placeholder }) => {
  return <input className={css['c-input']} id={id} name={name} type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};
Input.defaultProps = {
  id: null,
  name: null,
  type: 'text',
  placeholder: null
};

export default Input;