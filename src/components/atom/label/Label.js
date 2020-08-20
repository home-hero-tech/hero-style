import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Label.module.scss';

const Label = ({ name, small, children }) => {
  const classes = classNames({
    [css['c-label--small']]: !!small
  });

  return (
    <label className={classes} htmlFor={name}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
  name: PropTypes.string,
  small: PropTypes.bool
};

Label.defaultProps = {
  name: null,
  small: false
};

Label.displayName = 'Label';

export default Label;
