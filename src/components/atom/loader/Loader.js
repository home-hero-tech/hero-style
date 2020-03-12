import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/Text';

import css from './Loader.module.scss';

const Label = ({ text }) => (
  <div className={css['c-loader']}>
    <div className={css.spinner} />
    {text ? <Text>{text}</Text> : null}
  </div>
);

Label.propTypes = {
  text: PropTypes.string
};

Label.defaultProps = {
  text: null,
};

export default Label;
