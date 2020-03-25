import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';

import css from './FormGroup.module.scss';

const FormGroup = ({ error, icon, success, children, ...otherProps }) => {
  const classes = classNames({
    [css['c-form-group']]: true,
    [css['c-form-group--error']]: error,
    [css['c-form-group--error--icon']]: icon,
    [css['c-form-group--success']]: success
  });

  return (
    <Col {...otherProps} className={classes}>
      {children}
    </Col>
  );
};

FormGroup.propTypes = {
  error: PropTypes.bool,
  icon: PropTypes.bool,
  success: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
FormGroup.defaultProps = {
  error: false,
  icon: false,
  success: false,
  children: null
};

export default FormGroup;
