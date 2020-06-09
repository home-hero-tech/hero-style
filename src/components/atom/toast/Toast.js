import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Toast.module.scss';

const Toast = ({
  description,
  buttonText,
  success,
  error,
  warning,
  info,
  closeToast
}) => {
  const classes = classNames({
    [css.toast]: true,
    [css['toast--success']]: !!success,
    [css['toast--error']]: !!error,
    [css['toast--warning']]: !!warning,
    [css['toast--info']]: !!info
  });

  return (
    <div className={classes}>
      <p>{description}</p>
      <button onClick={closeToast}>{buttonText}</button>
    </div>
  );
};

Toast.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  closeToast: PropTypes.func
};
Toast.defaultProps = {
  success: false,
  error: false,
  warning: false,
  info: false,
  description: 'Write some description',
  buttonText: 'X',
  closeToast: f => f
};
Toast.displayName = 'ToastMessage';

export default Toast;
