import React from 'react';
import PropTypes from 'prop-types';

import css from './Loader.module.scss';

const Label = ({ text }) => (
  <div className={css['c-loader']}>
    <div className={css.spinner} />
    <p>{text}</p>
  </div>
);

Label.propTypes = {
  text: PropTypes.string
};

Label.defaultProps = {
  text: 'Carregando'
};

export default Label;
