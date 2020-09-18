import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../organism/modal/Modal.module.scss';

const ModalContent = ({ hasPadding, className, children }) => {
  const classes = classNames(css['c-modal__content'], className, {
    [css['c-modal__content--has-padding']]: hasPadding
  });
  return <main className={classes}>{children}</main>;
};

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  hasPadding: PropTypes.bool
};
ModalContent.defaultProps = {
  className: '',
  hasPadding: true
};
ModalContent.displayName = 'ModalContent';

export default ModalContent;
