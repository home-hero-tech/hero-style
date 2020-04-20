import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Label.module.scss';

const Label = ({ name, children }) => {
  const classes = classNames({
    [css['c-label']]: true,
    [css['c-label--small']]: !!small
  });

  return <label className={classes} htmlFor={name}>{children}</label>;
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string
};

Label.defaultProps = {
  name: null
};

export default Label;
