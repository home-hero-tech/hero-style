import React from 'react';
import PropTypes from 'prop-types';

import css from './CardLine.module.scss';

const CardLine = ({ children }) => <div className={css['c-card-line']}>{children}</div>;

CardLine.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
CardLine.defualtProps = {};
CardLine.displayName = 'CardLine';

export default CardLine;
