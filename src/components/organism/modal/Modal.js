import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import css from './Modal.module.scss';

import ModalActions from '../../molecule/modal-actions/ModalActions';
import Button from '../../atom/button/Button';

ReactModal.setAppElement('#root');

const Modal = ({
  children,
  left,
  right,
  onCancel,
  onConfirm,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-modal']]: true,
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
      className={classes}
      overlayClassName={classesOverlay}
      {...otherProps}
    >
      {children}
      {onCancel || onConfirm ? (
        <ModalActions>
          {onCancel ? (
            <Button onClick={onCancel} container="outlined" type="primary">
              Cancelar
            </Button>
          ) : null}
          {onConfirm ? (
            <Button onClick={onConfirm} type="primary">
              Enviar
            </Button>
          ) : null}
        </ModalActions>
      ) : null}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  left: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  right: PropTypes.bool
};

Modal.defaultProps = {
  left: false,
  right: true,
  onCancel: null,
  onConfirm: null
};

export default Modal;
