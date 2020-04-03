import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Row, Grid } from 'react-flexbox-grid';

import css from './Card.module.scss';

const Card = ({ small, children, ...otherProps }) => {
  const classes = classNames({
    [css['c-card']]: true,
    [css['c-card--small']]: small
  });
  return (
    <Grid fluid {...otherProps}>
      <Row className={classes}>{children}</Row>
    </Grid>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  small: PropTypes.bool,
};

Card.defaultProps = {
  children: null,
  small: false,
};

export default Card;
