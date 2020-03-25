import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/modal/Modal.module.scss';

const ModalActions = ({ children }) => {
  return <footer className={css['c-modal__actions']}>{children}</footer>;
};

ModalActions.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
