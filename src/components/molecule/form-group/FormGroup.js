import React from 'react';
import classNames from 'classnames';
import { Col } from 'react-flexbox-grid';

import css from './FormGroup.module.scss';

const FormGroup = (props) => {

  const classes = classNames({
    [css['c-form-group']]: true,
    [css['c-form-group--error']]: props.error,
    [css['c-form-group--success']]: props.success
  });

  return <Col {...props} className={classes}>{props.children}</Col>;
};

export default FormGroup;
