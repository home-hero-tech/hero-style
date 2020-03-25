import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import ModalActions from '../../molecule/modal-actions/ModalActions';
import Button from '../../atom/button/Button';
import Text from '../../atom/text/Text';
import Heading from '../../atom/heading/Heading';

import css from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal = ({
  btnCancelText,
  btnConfirmText,
  children,
  left,
  right,
  onCancel,
  onConfirm,
  contentLabel,
  title,
  description,
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
      className={classes}
      overlayClassName={classesOverlay}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick
      {...otherProps}
    >
      {title || description ? (
        <header className={css['c-modal__heading']}>
          {title ? <Heading level={3} title={title} /> : null}
          {description ? <Text>{description}</Text> : null}
        </header>
      ) : null}
      <main className={css['c-modal__content']}>{children}</main>
      {onCancel || onConfirm ? (
        <ModalActions>
          {onCancel ? (
            <Button onClick={onCancel} container="outlined" type="primary">
              {btnCancelText}
            </Button>
          ) : null}
          {onConfirm ? (
            <Button onClick={onConfirm} type="primary">
              {btnConfirmText}
            </Button>
          ) : null}
        </ModalActions>
      ) : null}
    </ReactModal>
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
  left: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  right: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
};

Modal.defaultProps = {
  btnCancelText: 'Cancelar',
  btnConfirmText: 'Enviar',
  left: false,
  right: true,
  onCancel: null,
  onConfirm: null,
  title: null,
  description: null
};

export default Modal;
