import React from 'react';
import PropTypes from 'prop-types';

import css from '../../organism/modal/Modal.module.scss';
import Heading from '../../atom/heading/Heading';
import Text from '../../atom/text/Text';

const ModalHeader = ({ title, description }) => {
  return title || description ? (
    <header className={css['c-modal__heading']}>
      {title ? <Heading level={3} title={title} /> : null}
      {description ? <Text>{description}</Text> : null}
    </header>
  ) : null;
};

ModalHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

ModalHeader.defaultProps = {
  description: null,
  title: null
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
