import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import { Col } from 'react-flexbox-grid';

import css from './CardItem.module.scss';

const ListItem = ({ primary, label, format, value, col, ellipsis }) => {
  const classes = classNames({
    [css['c-card-item']]: true,
    [css['c-card-item--primary']]: primary,
    [css['c-card-item--ellipsis']]: ellipsis
  });
  return (
    <Col className={classes} md={col}>
      <span>{label}</span>
      <span className={css['truncate']}>
        {value instanceof Date ? moment(value).format(format) : value}
      </span>
    </Col>
  );
};

ListItem.propTypes = {
  format: PropTypes.string,
  label: PropTypes.string,
  primary: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.number
  ]).isRequired,
  col: PropTypes.number,
  ellipsis: PropTypes.bool
};

ListItem.defaultProps = {
  label: null,
  primary: false,
  format: 'DD MMM YYYY [às] HH:mm',
  col: null,
  ellipsis: false
};

export default ListItem;
