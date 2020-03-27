import React from 'react';
import PropTypes from 'prop-types';
import css from '../../organism/modal/Modal.module.scss';

const ModalContent = ({ children }) => (
  <main className={css['c-modal__content']}>{children}</main>
);

ModalContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

ModalContent.defaultProps = {};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
