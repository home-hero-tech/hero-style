import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';

import css from './Select.module.scss';

const Select = ({
  autoFocus,
  isDisabled,
  isMulti,
  isSearchable,
  name,
  onChange,
  options,
  placeholder,
  noOptionsMessage,
  isClearable,
  value,
  dark,
  ...otherProps
}) => {
  const className = dark ? 'c-select--dark' : 'c-select';

  return (
    <RSelect
      autoFocus={autoFocus}
      className={css[className]}
      classNamePrefix={className}
      isDisabled={isDisabled}
      isMulti={isMulti}
      isSearchable={isSearchable}
      name={name}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      isClearable={isClearable}
      value={value}
      {...otherProps}
    />
  );
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  name: PropTypes.string,
  noOptionsMessage: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]),
  dark: PropTypes.bool
};

Select.defaultProps = {
  autoFocus: false,
  isClearable: false,
  isDisabled: false,
  isMulti: false,
  isSearchable: false,
  name: null,
  onChange: f => f,
  options: null,
  placeholder: null,
  noOptionsMessage: f => f,
  value: null,
  dark: false
};

export default Select;
