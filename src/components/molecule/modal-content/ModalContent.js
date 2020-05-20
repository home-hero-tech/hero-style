import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../organism/modal/Modal.module.scss';

const ModalContent = ({ className, children }) => {
  const classes = classNames(css['c-modal__content'], className);
  return <main className={classes}>{children}</main>;
};

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

ModalContent.defaultProps = {
  className: ''
};

ModalContent.defaultProps = {};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
