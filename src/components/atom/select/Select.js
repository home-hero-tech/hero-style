import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';

import css from './Select.module.scss';

const Select = ({
  dark,
  name,
  multiple,
  noOptionsMessage,
  onChange,
  options,
  placeholder,
  firstMessage,
  searchable,
  value,
  ...otherProps
}) => {
  const className = dark ? 'c-select--dark' : 'c-select';

  const allProps = {
    className: css[className],
    classNamePrefix: className,
    name,
    options,
    onChange,
    placeholder,
    backspaceRemoves: true,
    deleteRemoves: true,
    isMulti: multiple,
    isSearchable: searchable,
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
  multiple: false,
  searchable: true,
  name: null,
  onChange: f => f,
  options: null,
  placeholder: 'Selecionar',
  noOptionsMessage: f => f,
  value: null,
  dark: false,
  firstMessage: () => 'Digite para buscar',
};

export default Select;
