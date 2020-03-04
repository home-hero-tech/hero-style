import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.scss';

const Input = ({ id, name, type, placeholder }) => (
  <input
    className={css['c-input']}
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};
Input.defaultProps = {
  id: null,
  name: null,
  placeholder: null,
  type: 'text'
};

export default Input;
