import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './FormActions.module.scss';

const FormActions = ({ children, alignBetween, alignEnd }) => {
  const classes = classNames({
    [css['c-form-actions']]: true,
    [css['c-form-actions--align-between']]: alignBetween,
    [css['c-form-actions--align-end']]: alignEnd
  });
  return <div className={classes}>{children}</div>;
};

FormActions.propTypes = {
  alignBetween: PropTypes.bool,
  alignEnd: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
FormActions.defaultProps = {
  alignBetween: false,
  alignEnd: false,
  children: null
};

export default FormActions;
