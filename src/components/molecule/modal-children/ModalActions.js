import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/modal/Modal.module.scss';
import Button from '../../atom/button/Button';

const ModalActions = ({
  isForm,
  onCancel,
  onConfirm,
  btnCancelText,
  btnConfirmText
}) => {
  return onCancel || onConfirm ? (
    <footer className={css['c-modal__actions']}>
      {onCancel ? (
        <Button onClick={onCancel} container="outlined" type="primary">
          {btnCancelText}
        </Button>
      ) : null}
      {onConfirm ? (
        <Button onClick={!isForm ? onConfirm : null} type="primary" submit>
          {btnConfirmText}
        </Button>
      ) : null}
    </footer>
  ) : null;
};

ModalActions.propTypes = {
  isForm: PropTypes.bool,
  btnCancelText: PropTypes.string,
  btnConfirmText: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

ModalActions.defaultProps = {
  isForm: false,
  btnCancelText: 'Cancelar',
  btnConfirmText: 'Enviar',
  onCancel: f => f,
  onConfirm: f => f
};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
