import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';

import css from './Select.module.scss';

const Select = ({
  dark,
  firstMessage,
  id,
  multiple,
  name,
  onChange,
  noOptionsMessage,
  options,
  placeholder,
  searchable,
  value,
  small,
  ...otherProps
}) => {
  let selectClass = 'c-select';

  if (dark && !small) {
    selectClass = selectClass.concat('--dark');
  } else if (!dark && small) {
    selectClass = selectClass.concat('--small');
  } else if (small && dark) {
    selectClass = selectClass.concat('--small-dark');
  } else {
    selectClass = selectClass.concat('--default');
  }

  const allProps = {
    backspaceRemoves: true,
    inputId: id || name,
    className: css[selectClass],
    classNamePrefix: selectClass,
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
  small: PropTypes.bool,
  id: PropTypes.string,
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
  small: false,
  id: null,
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
