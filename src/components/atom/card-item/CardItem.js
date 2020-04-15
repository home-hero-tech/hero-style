import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import css from './CardItem.module.scss';

import EmptyCardItem from '../empty-card-item/EmptyCardItem';

const CardItem = ({ format, label, leftIcon, value, small, ...otherProps }) => {
  const valueClasses = classNames({
    [css['c-card-item__value']]: true,
    [css['c-card-item__value--small']]: !!small,
    [css.truncate]: true
  });

  const labelClasses = classNames({
    [css['c-card-item__label']]: true,
    [css['c-card-item__label--small']]: !!small,
    [css.truncate]: true
  });

  const renderContent = (_label, _value, _leftIcon) => (
    <>
      {_leftIcon || null}
      <div className={css['c-card-item__content']}>
        {_label ? <span className={labelClasses}>{_label}</span> : null}
        {_value ? (
          <span className={valueClasses}>
            {_value instanceof Date ? moment(_value).format(format) : _value}
          </span>
        ) : null}
      </div>
    </>
  );

  return (
    <EmptyCardItem small={small} {...otherProps}>
      {renderContent(label, value, leftIcon)}
    </EmptyCardItem>
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
