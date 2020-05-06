import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-light-svg-icons';

import Text from '../../atom/text/Text';

const TextOption = ({ index, selected, label, onClick, noCheck }) => {
  const optionClasses = classNames('c-text-option', {
    'c-text-option--checked': selected
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
      {!noCheck && (
        <span className="c-text-option__checkbox">
          {selected && <FontAwesomeIcon icon={faCheck} />}
        </span>
      )}
      <div className="c-text-option__title">
        <Text>{label}</Text>
      </div>
    </div>
  );
};

TextOption.propTypes = {
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  noCheck: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

TextOption.defaultProps = {
  onClick: f => f
};

export default TextOption;
