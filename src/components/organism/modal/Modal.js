import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import css from './Modal.module.scss';

import CloseButton from './CloseButton';

// ReactModal.setAppElement('#root');

const Modal = ({
  open,
  children,
  left,
  right,
  center,
  onRequestClose,
  contentLabel,
  widthLevel,
  onCancel,
  hasForm,
  className,
  ...otherProps
}) => {
  const classes = classNames(css['c-modal'], className, {
    [css['c-modal--pre-left']]: left,
    [css['c-modal--pre-right']]: right,
    [css[`c-modal--width-${widthLevel}`]]: true,
    [css['c-modal--center']]: center,
    [css['c-modal--has-form']]: hasForm,

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
      isOpen={open}
      className={classes}
      overlayClassName={classesOverlay}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick
      closeTimeoutMS={300}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      {...otherProps}
    >
      {onCancel ? <CloseButton onClick={onCancel} /> : null}
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
  contentLabel: PropTypes.string.isRequired,
  left: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool.isRequired,
  center: PropTypes.bool,
  right: PropTypes.bool,
  hasPadding: PropTypes.bool,
  widthLevel: PropTypes.number,
  className: PropTypes.string,
  hasForm: PropTypes.bool
};

Modal.defaultProps = {
  left: false,
  right: true,
  hasPadding: true,
  onRequestClose: null,
  onCancel: null,
  widthLevel: 1,
  center: false,
  className: '',
  hasForm: false
};

Modal.displayName = 'Modal';

export default Modal;
