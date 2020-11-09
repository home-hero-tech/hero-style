import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import RSelect from 'react-select';
import RSelectAsync from 'react-select/async';
import RSelectCreatable from 'react-select/creatable';
import RSelectAsyncCreatable from 'react-select/async-creatable';

import style from './Select.module.scss';

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
  grayLight,
  warning,
  primary,
  danger,
  success,
  customOptionsMessage,
  allowCustomOptions,
  wrapperStyle,
  noIndicator,
  ...otherProps
}) => {
  const _icon = icon ? 'with-icon' : '';
  const _small = small ? 'small' : '';
  const _dark = dark ? 'dark' : '';
  const _grayLight = grayLight ? 'grayLight' : '';
  const _warning = warning ? 'warning' : '';
  const _primary = primary ? 'primary' : '';
  const _danger = danger ? 'danger' : '';
  const _success = success ? 'success' : '';
  const status = _warning || _primary || _danger || _grayLight || _success;

  const RSComponents = {};

  if (noIndicator) RSComponents.IndicatorsContainer = () => null;

  const allProps = {
    backspaceRemoves: true,
    inputId: id || name,
    className: `${style[`c-select`]} ${style[_dark] || ''} ${style[_small] || ''} ${style[_icon] || ''} ${style[
      status
    ] || ''}`,
    classNamePrefix: `select-default`,
    deleteRemoves: true,
    isMulti: multiple,
    isSearchable: searchable,
    value,
    name,
    options,
    onChange,
    placeholder,
    isClearable,
    components: RSComponents,
    noOptionsMessage: ({ inputValue }) => (inputValue && inputValue.length ? noOptionsMessage() : firstMessage()),
    ...otherProps
  };

  const classesWrapper = classNames({
    [style['c-select-wrapper__icon']]: !!icon,
    [style['c-select-wrapper__icon--small']]: !!small
  });

  let elem = <RSelect {...allProps} />;

  if (allowCustomOptions) {
    elem = <RSelectCreatable {...allProps} formatCreateLabel={customOptionsMessage} />;
  }

  if (async) {
    if (allowCustomOptions) {
      elem = <RSelectAsyncCreatable {...allProps} formatCreateLabel={customOptionsMessage} />;
    } else {
      elem = <RSelectAsync {...allProps} />;
    }
  }

  return (
    <div className={style['c-select-wrapper']} style={wrapperStyle}>
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
  grayLight: PropTypes.bool,
  warning: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
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
  customOptionsMessage: PropTypes.func,
  wrapperStyle: PropTypes.instanceOf(Object),
  noIndicator: PropTypes.bool
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
  grayLight: false,
  warning: false,
  primary: false,
  success: false,
  danger: false,
  customOptionsMessage: newValue => `Criar "${newValue}"`,
  noIndicator: false
};

Select.displayName = 'Select';

export default Select;
