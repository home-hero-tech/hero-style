import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';

const FormModal = ({
  // EmptyModal props
  open,
  left,
  right,
  onRequestClose,
  onSubmit,
  contentLabel,
  children,
  ...otherProps
}) => {
  return (
    <Modal
      open={open}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      left={left}
      right={right}
      {...otherProps}
      hasForm
    >
      <form onSubmit={onSubmit}>{children}</form>
    </Modal>
  );
};

FormModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
  contentLabel: PropTypes.string.isRequired,
  left: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  right: PropTypes.bool
};

FormModal.defaultProps = {
  left: false,
  right: true,
  onRequestClose: f => f
};

FormModal.displayName = 'FormModal';

export default FormModal;
