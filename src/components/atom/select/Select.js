import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';
import RSelectAsync from 'react-select/async';
import RSelectCreatable from 'react-select/creatable';
import RSelectAsyncCreatable from 'react-select/async-creatable';

import classNames from 'classnames';
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
  icon,
  isClearable,
  async,
  customOptionsMessage,
  allowCustomOptions,
  ...otherProps
}) => {
  let selectClass = 'c-select';

  if (icon && !small && !dark) {
    selectClass = selectClass.concat('--with-icon');
  } else if (icon && small) {
    selectClass = selectClass.concat('--with-icon--small');
  } else if (dark && !small) {
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
    isClearable,
    noOptionsMessage: ({ inputValue }) => (inputValue && inputValue.length ? noOptionsMessage() : firstMessage()),
    ...otherProps
  };

  const classesWrapper = classNames({
    [css['c-select-wrapper__icon']]: !!icon,
    [css['c-select-wrapper__icon--small']]: !!small
  });

  let elem = <RSelect {...allProps} />;

  if (allowCustomOptions) {
    elem = <RSelectCreatable {...allProps} formatCreateLabel={customOptionsMessage} />;
  }

  if (async) {
    if (allowCustomOptions) {
      elem = <RSelectAsync {...allProps} />;
    } else {
      elem = <RSelectAsync {...allProps} />;
    }
  }

  return (
    <div className={css['c-select-wrapper']}>
      <span className={classesWrapper}>{icon || null}</span>
      {elem}
    </div>
  );
};

Select.propTypes = {
  dark: PropTypes.bool,
  firstMessage: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.instanceOf(Object),
  multiple: PropTypes.bool,
  name: PropTypes.string,
  noOptionsMessage: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  small: PropTypes.bool,
  searchable: PropTypes.bool,
  async: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string, PropTypes.number]),
  isClearable: PropTypes.bool,
  allowCustomOptions: PropTypes.bool,
  customOptionsMessage: PropTypes.func
};

Select.defaultProps = {
  dark: false,
  id: null,
  icon: null,
  firstMessage: () => 'Digite para buscar',
  multiple: false,
  name: null,
  noOptionsMessage: () => 'Nenhuma opção',
  onChange: f => f,
  options: null,
  placeholder: 'Selecionar',
  small: false,
  searchable: true,
  async: false,
  value: null,
  isClearable: false,
  allowCustomOptions: false,
  customOptionsMessage: newValue => `Criar "${newValue}"`
};

export default Select;
