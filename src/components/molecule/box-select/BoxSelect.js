import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-light-svg-icons';

import './BoxSelect.scss';

const BoxSelect = ({ selected, options, onChange, className, shape, noCheck }) => {
  const classes = classNames(
    'c-box-select',
    `c-box-select--${shape}`,
    className
  );

  const handleChange = id => () => onChange(options.find(opt => opt.id === id));
  const isSelected = opt => !!selected && selected.value === opt.value;

  return (
    <div className={classes}>
      {options.map(opt => (
        <BoxSelect.Option
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

BoxSelect.propTypes = {
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
  shape: PropTypes.oneOf(['squared', 'rectangular']),
  noCheck: PropTypes.bool,
  onChange: PropTypes.func
};

BoxSelect.defaultProps = {
  selected: null,
  options: [],
  className: '',
  shape: 'rectangular',
  noCheck: false,
  onChange: f => f
};

BoxSelect.Option = ({ index, selected, label, icon, onClick, noCheck }) => {
  const optionClasses = classNames('c-box-option', {
    'c-box-option--checked': selected
  });

  const handleKeyPress = e => {
    e.preventDefault();
  };

  return (
    <div
      key={index}
      role="button"
      className={optionClasses}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      {icon && (
        <div className="c-box-option__icon">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      )}
      <p className="c-box-option__title">{label}</p>
      {!noCheck && (
        <span className="c-box-option__checkbox">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      )}
    </div>
  );
};

BoxSelect.Option.propTypes = {
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object),
  noCheck: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

BoxSelect.Option.defaultProps = {
  icon: null,
  onClick: f => f
};

export default BoxSelect;
