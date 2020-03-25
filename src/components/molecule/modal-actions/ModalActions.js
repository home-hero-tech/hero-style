import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/modal/Modal.module.scss';

const ModalActions = ({ children }) => {
  return <div className={css['c-modal__actions']}>{children}</div>;
};

ModalActions.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
