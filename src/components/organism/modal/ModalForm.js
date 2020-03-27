import React from 'react';
import PropTypes from 'prop-types';

import EmptyModal from './EmptyModal';
import ModalActions from '../../molecule/modal-children/ModalActions';
import ModalHeader from '../../molecule/modal-children/ModalHeader';

import css from './Modal.module.scss';

const ModalForm = ({
  // EmptyModal props
  open,
  left,
  right,
  onRequestClose,

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
      contentLabel={title}
      onRequestClose={onRequestClose}
      left={left}
      right={right}
      {...otherProps}
    >
      <form onSubmit={onConfirm}>
        <ModalHeader title={title} description={description} />
        <main className={css['c-modal__content']}>{children}</main>
        <ModalActions
          isForm
          onCancel={onCancel}
          onConfirm={onConfirm}
          btnCancelText={btnCancelText}
          btnConfirmText={btnConfirmText}
        />
      </form>
    </EmptyModal>
  );
};

ModalForm.propTypes = {
  btnCancelText: PropTypes.string,
  btnConfirmText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  description: PropTypes.string,
  left: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  right: PropTypes.bool,
  title: PropTypes.string
};

ModalForm.defaultProps = {
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

ModalForm.displayName = 'ModalForm';

export default ModalForm;
