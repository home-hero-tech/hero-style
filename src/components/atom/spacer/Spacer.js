import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Spacer.module.scss';

const Spacer = ({
  mtLg,
  mtMd,
  mtSm,
  mtXs,
  mbLg,
  mbMd,
  mbSm,
  mbXs,
  inline,
  children
}) => {
  const classes = classNames({
    [css['c-spacer']]: true,
    [css['c-spacer--inline']]: inline,
    [css[`c-spacer--mt-lg-${mtLg}`]]: !!mtLg,
    [css[`c-spacer--mt-md-${mtMd}`]]: !!mtMd,
    [css[`c-spacer--mt-sm-${mtSm}`]]: !!mtSm,
    [css[`c-spacer--mt-xs-${mtXs}`]]: !!mtXs,
    [css[`c-spacer--mb-lg-${mbLg}`]]: !!mbLg,
    [css[`c-spacer--mb-md-${mbMd}`]]: !!mbMd,
    [css[`c-spacer--mb-sm-${mbSm}`]]: !!mbSm,
    [css[`c-spacer--mb-xs-${mbXs}`]]: !!mbXs
  });

  return <div className={classes}>{children}</div>;
};

Spacer.propTypes = {
  mtLg: PropTypes.number,
  mtMd: PropTypes.number,
  mtSm: PropTypes.number,
  mtXs: PropTypes.number,
  mbLg: PropTypes.number,
  mbMd: PropTypes.number,
  mbSm: PropTypes.number,
  mbXs: PropTypes.number,
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
  mbLg: null,
  mbMd: null,
  mbSm: null,
  mbXs: null,
  children: null,
  inline: false
};

export default Spacer;
