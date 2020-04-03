import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import { Col } from 'react-flexbox-grid';

import css from './CardItem.module.scss';

const CardItem = ({
  ellipsis,
  format,
  gray,
  label,
  lbGray,
  lbPrimary,
  leftIcon,
  primary,
  small,
  svgPrimary,
  valPrimary,
  value,
  white,
  lbWhite,
  valWhite,
  svgWhite,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-card-item']]: true,
    [css['c-card-item--ellipsis']]: ellipsis,
    [css['c-card-item--small']]: small,

    [css['c-card-item--lb-gray']]: gray || lbGray,

    [css['c-card-item--lb-primary']]: primary || lbPrimary,
    [css['c-card-item--val-primary']]: primary || valPrimary,
    [css['c-card-item--svg-primary']]: primary || svgPrimary,

    [css['c-card-item--lb-white']]: white || lbWhite,
    [css['c-card-item--val-white']]: white || valWhite,
    [css['c-card-item--svg-white']]: white || svgWhite
  });

  const renderContent = (_label, _value, _leftIcon) => (
    <>
      {_leftIcon || null}
      <div className={css['c-card-item__content']}>
        <span>{_label}</span>
        <span className={css.truncate}>
          {_value instanceof Date ? moment(_value).format(format) : _value}
        </span>
      </div>
    </>
  );

  return (
    <Col className={classes} {...otherProps}>
      {renderContent(label, value, leftIcon)}
    </Col>
  );
};

CardItem.propTypes = {
  ellipsis: PropTypes.bool,
  format: PropTypes.string,
  gray: PropTypes.bool,
  label: PropTypes.string,
  lbPrimary: PropTypes.bool,
  lbWhite: PropTypes.bool,
  lbGray: PropTypes.bool,
  leftIcon: PropTypes.instanceOf(Object),
  primary: PropTypes.bool,
  white: PropTypes.bool,
  small: PropTypes.bool,
  svgPrimary: PropTypes.bool,
  svgWhite: PropTypes.bool,
  valPrimary: PropTypes.bool,
  valWhite: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.number
  ]).isRequired
};

CardItem.defaultProps = {
  ellipsis: false,
  format: 'DD MMM YYYY [às] HH:mm',
  gray: false,
  label: null,
  lbPrimary: false,
  lbWhite: false,
  lbGray: false,
  leftIcon: null,
  primary: false,
  white: false,
  small: false,
  svgPrimary: false,
  svgWhite: false,
  valPrimary: false,
  valWhite: false
};

CardItem.displayName = 'CardItem';

export default CardItem;
