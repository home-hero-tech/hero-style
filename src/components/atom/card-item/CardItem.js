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
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-card-item']]: true,
    [css['c-card-item--ellipsis']]: ellipsis,
    [css['c-card-item--small']]: small,

    [css['c-card-item--gray']]: gray,
    [css['c-card-item--lb-gray']]: gray || lbGray,

    [css['c-card-item--primary']]: primary,
    [css['c-card-item--lb-primary']]: primary || lbPrimary,
    [css['c-card-item--val-primary']]: primary || valPrimary,
    [css['c-card-item--svg-primary']]: primary || svgPrimary
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
  lbGray: PropTypes.bool,
  leftIcon: PropTypes.bool,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  svgPrimary: PropTypes.bool,
  valPrimary: PropTypes.bool,
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
  lbGray: false,
  leftIcon: false,
  primary: false,
  small: false,
  svgPrimary: false,
  valPrimary: false
};

CardItem.displayName = 'CardItem';

export default CardItem;
