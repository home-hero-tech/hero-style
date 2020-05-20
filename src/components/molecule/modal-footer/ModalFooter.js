import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../organism/modal/Modal.module.scss';

const ModalFooter = ({ className, children, align }) => {
  const classes = classNames(css['c-modal__actions'], className, {
    'c-modal__actions--align-end': align === 'end',
    'c-modal__actions--align-between': align === 'between'
  });
  return <footer className={classes}>{children}</footer>;
};

ModalFooter.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['between', 'end']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

ModalFooter.defaultProps = {
  className: '',
  align: 'between'
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
