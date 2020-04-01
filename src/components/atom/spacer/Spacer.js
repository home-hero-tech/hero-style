import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Spacer.module.scss';

const Spacer = ({ mtLg, mtMd, mtSm, mtXs, inline, children }) => {
  const classes = classNames({
    [css['c-spacer']]: true,
    [css['c-spacer--inline']]: inline,
    [css[`c-spacer--mt-lg-${mtLg}`]]: !!mtLg,
    [css[`c-spacer--mt-md-${mtMd}`]]: !!mtMd,
    [css[`c-spacer--mt-sm-${mtSm}`]]: !!mtSm,
    [css[`c-spacer--mt-xs-${mtXs}`]]: !!mtXs
  });

  return <div className={classes}>{children}</div>;
};

Spacer.propTypes = {
  mtLg: PropTypes.number,
  mtMd: PropTypes.number,
  mtSm: PropTypes.number,
  mtXs: PropTypes.number,
  inline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

Spacer.defaultProps = {
  mtLg: null,
  mtMd: null,
  mtSm: null,
  mtXs: null,
  children: null,
  inline: false
};

export default Spacer;
