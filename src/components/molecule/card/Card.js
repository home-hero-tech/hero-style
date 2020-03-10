import React from 'react';

import PropTypes from 'prop-types';

import css from './Card.module.scss';

const Card = ({ children }) => <ul className={css['c-card']}>{children}</ul>;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Card.defaultProps = {
  children: null
};

export default Card;
