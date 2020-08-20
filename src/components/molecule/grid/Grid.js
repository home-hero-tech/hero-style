import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'react-flexbox-grid';

import css from './Grid.module.scss';

const FlexGrid = ({ children, ...props }) => {
  const classes = classNames({
    [css['c-grid']]: true
  });

  return (
    <Grid className={classes} {...props}>
      {children}
    </Grid>
  );
};

FlexGrid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
};

FlexGrid.defaultProps = {
  children: null
};

export default FlexGrid;
