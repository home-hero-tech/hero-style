import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';

import css from './Select.module.scss';

const Select = ({
  dark,
  firstMessage,
  multiple,
  name,
  onChange,
  noOptionsMessage,
  options,
  placeholder,
  searchable,
  value,
  ...otherProps
}) => {
  const className = dark ? 'c-select--dark' : 'c-select';

  const allProps = {
    backspaceRemoves: true,
    className: css[className],
    classNamePrefix: className,
    deleteRemoves: true,
    isMulti: multiple,
    isSearchable: searchable,
    value,
    name,
    options,
    onChange,
    placeholder,
    noOptionsMessage: ({ inputValue }) =>
      inputValue && inputValue.length ? noOptionsMessage() : firstMessage(),
    ...otherProps
  };

  return <RSelect {...allProps} />;
};

Select.propTypes = {
  dark: PropTypes.bool,
  firstMessage: PropTypes.func,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  searchable: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
};

Select.defaultProps = {
  dark: false,
  firstMessage: () => 'Digite para buscar',
  multiple: false,
  name: null,
  searchable: true,
  onChange: f => f,
  options: null,
  placeholder: 'Selecionar',
  noOptionsMessage: f => f,
  value: null
};

export default Select;
