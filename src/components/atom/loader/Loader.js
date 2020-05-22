import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from '../text/Text';

import css from './Loader.module.scss';

const Label = ({ text, small }) => {
  const classes = classNames({
    [css.spinner]: true,
    [css[`spinner--small`]]: small
  });

  return (
    <div className={css['c-loader']}>
      <div className={classes} />
      {text ? <Text>{text}</Text> : null}
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  small: PropTypes.bool
};

Label.defaultProps = {
  text: null,
  small: false
};

export default Label;
