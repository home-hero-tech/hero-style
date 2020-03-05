import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.scss';

const Input = ({ id, name, type, placeholder, value, onChange }) => (
  <input
    className={css['c-input']}
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Input.defaultProps = {
  id: null,
  name: null,
  onChange: f => f,
  placeholder: null,
  type: 'text',
  value: null
};

export default Input;
