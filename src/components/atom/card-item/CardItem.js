import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import css from './CardItem.module.scss';

const ListItem = ({ label, format, value }) => (
  <li className={css['c-card-item']}>
    <span>{label}</span>
    <span>{value instanceof Date ? moment(value).format(format) : value}</span>
  </li>
);

ListItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  format: PropTypes.string
};

ListItem.defaultProps = {
  label: null,
  format: 'DD MMM YYYY [às] HH:mm'
};

export default ListItem;
