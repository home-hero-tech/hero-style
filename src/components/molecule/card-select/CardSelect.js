import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardOption from './Option';
import TextOption from './TextOption';

import './CardSelect.scss';

const CardSelect = ({
  type,
  selected,
  options,
  onChange,
  className,
  noCheck,
  flex
}) => {
  const classes = classNames('c-card-select', className, {
    'c-card-select--flex-col': flex === 'col',
    'c-card-select--flex-row': flex === 'row'
  });

  const handleChange = id => () => onChange(options.find(opt => opt.id === id));
  const isSelected = opt => !!selected && selected.value === opt.value;

  const Option = type === 'text' ? TextOption : CardOption;

  return (
    <div className={classes}>
      {options.map(opt => (
        <Option
          type={type}
          key={opt.id}
          label={opt.label}
          icon={opt.icon}
          selected={isSelected(opt)}
          onClick={handleChange(opt.id)}
          noCheck={noCheck}
        />
      ))}
    </div>
  );
};

CardSelect.propTypes = {
  type: PropTypes.oneOf(['small', 'default', 'text']),
  flex: PropTypes.oneOf(['row', 'col']),
  selected: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ),
  className: PropTypes.string,
  noCheck: PropTypes.bool,
  onChange: PropTypes.func
};

CardSelect.defaultProps = {
  type: 'default',
  flex: 'row',
  selected: null,
  options: [],
  className: '',
  noCheck: false,
  onChange: f => f
};

export default CardSelect;
