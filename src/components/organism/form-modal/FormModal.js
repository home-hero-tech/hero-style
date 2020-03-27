import React from 'react';
import PropTypes from 'prop-types';

import EmptyModal from '../empty-modal/EmptyModal';

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
    <EmptyModal
      open={open}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      left={left}
      right={right}
      {...otherProps}
    >
      <form onSubmit={onSubmit}>{children}</form>
    </EmptyModal>
  );
};

FormModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
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
