import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Option = ({ index, selected, type, onClick, noCheck, Content }) => {
  const optionClasses = classNames('c-card-content-option', {
    'c-card-content-option--checked': selected,
    'c-card-content-option--small': type === 'small'
  });

  const handleKeyPress = e => {
    e.preventDefault();
  };

  return (
    <div key={index} role="button" className={optionClasses} onClick={onClick} onKeyPress={handleKeyPress} tabIndex={0}>
      {!noCheck && (
        <span className="c-card-content-option__checkbox">
          <div />
        </span>
      )}
      {Content && (
        <div className="c-card-content-option__content">
          <Content />
        </div>
      )}
    </div>
  );
};

Option.propTypes = {
  type: PropTypes.oneOf(['small', 'default']),
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  Content: PropTypes.instanceOf(Object),
  noCheck: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

Option.defaultProps = {
  type: 'default',
  onClick: f => f
};

export default Option;
