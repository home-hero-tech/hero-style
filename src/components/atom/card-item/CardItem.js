import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import css from './CardItem.module.scss';

const ListItem = ({ primary, label, format, value }) => {
  const classes = classNames({
    [css['c-card-item']]: true,
    [css['c-card-item--primary']]: primary
  });
  return (
    <li className={classes}>
      <span>{label}</span>
      <span>
        {value instanceof Date ? moment(value).format(format) : value}
      </span>
    </li>
  );
};

ListItem.propTypes = {
  format: PropTypes.string,
  label: PropTypes.string,
  primary: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired
};

ListItem.defaultProps = {
  label: null,
  primary: false,
  format: 'DD MMM YYYY [às] HH:mm'
};

export default ListItem;
