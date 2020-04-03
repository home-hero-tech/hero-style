import React from 'react';
import PropTypes from 'prop-types';

import { Row, Grid } from 'react-flexbox-grid';

import css from './Card.module.scss';

const Card = ({ children, ...otherProps }) => (
  <Grid fluid {...otherProps}>
    <Row className={css['c-card']}>{children}</Row>
  </Grid>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Card.defaultProps = {
  children: null
};

export default Card;
