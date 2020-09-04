import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import css from './CardItem.module.scss';

import EmptyCardItem from '../empty-card-item/EmptyCardItem';
import Tooltip from '../../molecule/tooltip/Tooltip';

const CardItem = ({ format, label, leftIcon, value, small, tooltip, href, className, html, thin, ...otherProps }) => {
  const classes = classNames(css['c-card-item__content'], className);
  const { textItemClassName, textItemOnClick } = otherProps;
  const valueClasses = classNames(
    {
      [css['c-card-item__value']]: true,
      [css['c-card-item__value--thin']]: thin,
      [css['c-card-item__value--small']]: !!small,
      [css.truncate]: true
    },
    textItemClassName
  );

  const labelClasses = classNames({
    [css['c-card-item__label']]: true,
    [css['c-card-item__value--thin']]: thin,
    [css['c-card-item__label--small']]: !!small,
    [css.truncate]: true
  });

  const RenderValue = (_value, _tooltip, _href, _html) => {
    if (_html) {
      return (
        <div
          {/* eslint-disable-next-line react/no-danger */}
          dangerouslySetInnerHTML={{
            //eslint-disable-line
            __html: _value
          }}
        />
      );
    }

    if (_tooltip) {
      return (
        <Tooltip description={_tooltip} position="bottom-start" animation="perspective">
          {_href ? <a href={_href}>{_value}</a> : value}
        </Tooltip>
      );
    }

    return _href ? <a href={_href}>{_value}</a> : _value;
  };

  const renderContent = (_label, _value, _leftIcon, _tooltip, _href, _html) => (
    <>
      {_leftIcon || null}
      <div className={classes}>
        {_label ? <span className={labelClasses}>{_label}</span> : null}
        {_value ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <span onClick={textItemOnClick} className={valueClasses}>
            {_value instanceof Date
              ? RenderValue(moment(_value).format(format), _tooltip, _href, _html)
              : RenderValue(_value, _tooltip, _href, _html)}
          </span>
        ) : null}
      </div>
    </>
  );

  return (
    <EmptyCardItem small={small} {...otherProps}>
      {renderContent(label, value, leftIcon, tooltip, href, html)}
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
  valSuccess: PropTypes.bool,
  valGrayLight: PropTypes.bool,
  valWhite: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number]),
  tooltip: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  html: PropTypes.bool,
  thin: PropTypes.bool
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
  valSuccess: false,
  valGrayLight: false,
  valWhite: false,
  value: null,
  tooltip: null,
  className: null,
  href: null,
  html: false,
  thin: false
};

CardItem.displayName = 'CardItem';

export default CardItem;
