import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import css from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal = ({
  open,
  children,
  left,
  right,
  onRequestClose,
  contentLabel,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-modal']]: true,
    [css['c-modal--pre-left']]: left,
    [css['c-modal--pre-right']]: right,

    [css['c-modal-overlay--left']]: left,
    [css['c-modal-overlay--right']]: right
  });

  const classesOverlay = classNames({
    [css['c-modal-overlay']]: true,
    [css['c-modal-overlay--left']]: left,
    [css['c-modal-overlay--right']]: right
  });

  return (
    <ReactModal
      fluid
      isOpen={open}
      className={classes}
      overlayClassName={classesOverlay}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick
      closeTimeoutMS={300}
      onRequestClose={onRequestClose}
      {...otherProps}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  contentLabel: PropTypes.string.isRequired,
  left: PropTypes.bool,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  right: PropTypes.bool,
};

Modal.defaultProps = {
  left: false,
  right: true,
  onRequestClose: null,
};

export default Modal;
