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
    value={value}
  >
  </RSelect>;
};


export default Select;
