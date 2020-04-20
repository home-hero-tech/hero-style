import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

import css from './Modal.module.scss';

const CloseButton = ({ onClick }) => (
  <button onClick={onClick} className={css['c-modal__close-btn']}>
    <FontAwesomeIcon icon={faTimes} />
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func
};

CloseButton.defaultProps = {
  onClick: f => f
};

CloseButton.displayName = 'CloseButton';

export default CloseButton;
