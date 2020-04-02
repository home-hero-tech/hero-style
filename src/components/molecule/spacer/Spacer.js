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
  mxLg,
  mxMd,
  mxSm,
  mxXs,
  inline,
  children
}) => {
  const classes = classNames({
    [css['c-spacer']]: true,
    [css['c-spacer--inline']]: inline,
    [css[`c-spacer--mt-lg-${mtLg || mxLg}`]]: !!mtLg || !!mxLg,
    [css[`c-spacer--mt-md-${mtMd || mxMd}`]]: !!mtMd || !!mxMd,
    [css[`c-spacer--mt-sm-${mtSm || mxSm}`]]: !!mtSm || !!mxSm,
    [css[`c-spacer--mt-xs-${mtXs || mxXs}`]]: !!mtXs || !!mxXs,
    [css[`c-spacer--mb-lg-${mbLg || mxLg}`]]: !!mbLg || !!mxLg,
    [css[`c-spacer--mb-md-${mbMd || mxMd}`]]: !!mbMd || !!mxMd,
    [css[`c-spacer--mb-sm-${mbSm || mxSm}`]]: !!mbSm || !!mxSm,
    [css[`c-spacer--mb-xs-${mbXs || mxXs}`]]: !!mbXs || !!mxXs
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
  mxLg: PropTypes.number,
  mxMd: PropTypes.number,
  mxSm: PropTypes.number,
  mxXs: PropTypes.number,
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
  mxLg: null,
  mxMd: null,
  mxSm: null,
  mxXs: null,
  children: null,
  inline: false
};

export default Spacer;
