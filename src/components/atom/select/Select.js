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

  return <RSelect
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
  >
  </RSelect>;
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  classNamePrefix: PropTypes.string,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  options: PropTypes.array,
  placeholder: PropTypes.string,
  noOptionsMessage: PropTypes.func,
  isClearable: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
};


export default Select;
