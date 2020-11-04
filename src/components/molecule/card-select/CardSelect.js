import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardOption from './Option';
import ContentOption from './ContentOption';
import TextOption from './TextOption';

import './CardSelect.scss';

const CardSelect = ({ type, selected, multiple, options, onChange, className, noCheck, flex }) => {
  const classes = classNames('c-card-select', className, {
    'c-card-select--flex-col': flex === 'col',
    'c-card-select--flex-row': flex === 'row'
  });

  const isSelected = opt => {
    if (!selected) return false;
    return multiple ? selected.map(x => x.value).includes(opt.value) : selected.value === opt.value;
  };

  const handleChange = id => () => {
    const option = options.find(opt => opt.id === id);
    let changed = option;
    if (multiple) {
      changed = isSelected(option) ? selected.filter(s => s.value !== option.value) : selected.concat(option);
    }
    onChange(changed);
  };

  let Option;

  switch (type) {
    case 'text':
      Option = TextOption;
      break;
    case 'content':
      Option = ContentOption;
      break;
    default:
      Option = CardOption;
      break;
  }

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
          Content={opt.Content}
        />
      ))}
    </div>
  );
};

CardSelect.propTypes = {
  type: PropTypes.oneOf(['small', 'default', 'text']),
  flex: PropTypes.oneOf(['row', 'col']),
  selected: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.any])
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.any])
      })
    )
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.any])
    })
  ),
  className: PropTypes.string,
  noCheck: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func
};

CardSelect.defaultProps = {
  type: 'default',
  flex: 'row',
  selected: null,
  options: [],
  className: '',
  noCheck: false,
  multiple: false,
  onChange: f => f
};

export default CardSelect;
