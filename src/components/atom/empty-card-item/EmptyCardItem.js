import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Col } from 'react-flexbox-grid';

import css from '../card-item/CardItem.module.scss';

const EmptyCardItem = ({
  ellipsis,
  gray,
  lbGray,
  lbPrimary,
  primary,
  small,
  svgPrimary,
  valPrimary,
  white,
  lbWhite,
  valWhite,
  svgWhite,
  children,
  ...otherProps
}) => {
  const { lg, md, sm, xs } = otherProps;

  const classes = classNames({
    [css['c-card-item']]: true,
    [css['c-card-item--default']]: true,
    [css['c-card-item--ellipsis']]: ellipsis,
    [css['c-card-item--small']]: small,

    [css['c-card-item--lb-gray']]: gray || lbGray,

    [css['c-card-item--lb-primary']]: primary || lbPrimary,
    [css['c-card-item--val-primary']]: primary || valPrimary,
    [css['c-card-item--svg-primary']]: primary || svgPrimary,

    [css['c-card-item--lb-white']]: white || lbWhite,
    [css['c-card-item--val-white']]: white || valWhite,
    [css['c-card-item--svg-white']]: white || svgWhite,

    [css['c-card-item--no-margin']]: lg || md || sm || xs
  });

  return (
    <Col className={classes} {...otherProps}>
      {children}
    </Col>
  );
};

EmptyCardItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  ellipsis: PropTypes.bool,
  gray: PropTypes.bool,
  lbPrimary: PropTypes.bool,
  lbWhite: PropTypes.bool,
  lbGray: PropTypes.bool,
  primary: PropTypes.bool,
  white: PropTypes.bool,
  small: PropTypes.bool,
  svgPrimary: PropTypes.bool,
  svgWhite: PropTypes.bool,
  valPrimary: PropTypes.bool,
  valWhite: PropTypes.bool
};

EmptyCardItem.defaultProps = {
  children: null,
  ellipsis: false,
  gray: false,
  lbPrimary: false,
  lbWhite: false,
  lbGray: false,
  primary: false,
  white: false,
  small: false,
  svgPrimary: false,
  svgWhite: false,
  valPrimary: false,
  valWhite: false
};

EmptyCardItem.displayName = 'EmptyCardItem';

export default EmptyCardItem;
