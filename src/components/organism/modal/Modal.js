import React from 'react';
import PropTypes from 'prop-types';

import EmptyModal from './EmptyModal';
import ModalActions from '../../molecule/modal-children/ModalActions';
import ModalHeader from '../../molecule/modal-children/ModalHeader';

import css from './Modal.module.scss';

const Modal = ({
  // EmptyModal props
  open,
  left,
  right,
  onRequestClose,
  contentLabel,

  btnCancelText,
  btnConfirmText,
  children,
  onCancel,
  onConfirm,
  title,
  description,
  ...otherProps
}) => {
  return (
    <EmptyModal
      open={open}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      left={left}
      right={right}
      {...otherProps}
    >
      <ModalHeader title={title} description={description} />
      <main className={css['c-modal__content']}>{children}</main>
      <ModalActions
        onCancel={onCancel}
        onConfirm={onConfirm}
        btnCancelText={btnCancelText}
        btnConfirmText={btnConfirmText}
      />
    </EmptyModal>
  );
};

Modal.propTypes = {
  btnCancelText: PropTypes.string,
  btnConfirmText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  contentLabel: PropTypes.string.isRequired,
  description: PropTypes.string,
  left: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  right: PropTypes.bool,
  title: PropTypes.string
};

Modal.defaultProps = {
  btnCancelText: 'Cancelar',
  btnConfirmText: 'Enviar',
  left: false,
  right: true,
  onCancel: null,
  onConfirm: null,
  onRequestClose: null,
  title: null,
  description: null
};

Modal.displayName = 'Modal';

export default Modal;
