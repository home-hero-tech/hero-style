import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/modal/Modal.module.scss';

const ModalFooter = ({ children }) => (
  <footer className={css['c-modal__actions']}>{children}</footer>
);

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

ModalFooter.defaultProps = {};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
