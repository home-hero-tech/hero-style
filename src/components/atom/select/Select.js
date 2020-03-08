import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';

import css from './Select.module.scss';

const Select = ({
  autoFocus,
  classNamePrefix,
  isDisabled,
  isMulti,
  isSearchable,
  name,
  onChange,
  options,
  placeholder,
  noOptionsMessage,
  isClearable,
  value
}) => {
  return (
    <RSelect
      autoFocus={autoFocus}
      className={css['c-select']}
      classNamePrefix={classNamePrefix}
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
    />
  );
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  classNamePrefix: PropTypes.string,
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
  ])
};

Select.defaultProps = {
  autoFocus: false,
  classNamePrefix: null,
  isClearable: false,
  isDisabled: false,
  isMulti: false,
  isSearchable: false,
  name: null,
  onChange: f => f,
  options: null,
  placeholder: null,
  noOptionsMessage: f => f,
  value: null
};

export default Select;
