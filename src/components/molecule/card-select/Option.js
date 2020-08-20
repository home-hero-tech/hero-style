import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-light-svg-icons';

const Option = ({ index, selected, label, icon, type, onClick, noCheck }) => {
  const optionClasses = classNames('c-card-option', {
    'c-card-option--checked': selected,
    'c-card-option--small': type === 'small'
  });

  const handleKeyPress = e => {
    e.preventDefault();
  };

  return (
    <div key={index} role="button" className={optionClasses} onClick={onClick} onKeyPress={handleKeyPress} tabIndex={0}>
      {icon && <div className="c-card-option__icon">{icon}</div>}
      <p className="c-card-option__title">{label}</p>
      {!noCheck && (
        <span className="c-card-option__checkbox">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      )}
    </div>
  );
};

Option.propTypes = {
  type: PropTypes.oneOf(['small', 'default']),
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object),
  noCheck: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

Option.defaultProps = {
  type: 'default',
  icon: null,
  onClick: f => f
};

export default Option;
