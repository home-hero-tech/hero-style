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
  mlLg,
  mlMd,
  mlSm,
  mlXs,
  mrLg,
  mrMd,
  mrSm,
  mrXs,
  mxLg,
  mxMd,
  mxSm,
  mxXs,
  myLg,
  myMd,
  mySm,
  myXs,
  inline,
  children,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-spacer']]: true,
    [css['c-spacer--inline']]: inline,
    [css[`c-spacer--mt-lg-${mtLg || myLg}`]]: !!mtLg || !!myLg,
    [css[`c-spacer--mt-md-${mtMd || myMd}`]]: !!mtMd || !!myMd,
    [css[`c-spacer--mt-sm-${mtSm || mySm}`]]: !!mtSm || !!mySm,
    [css[`c-spacer--mt-xs-${mtXs || myXs}`]]: !!mtXs || !!myXs,
    [css[`c-spacer--mb-lg-${mbLg || myLg}`]]: !!mbLg || !!myLg,
    [css[`c-spacer--mb-md-${mbMd || myMd}`]]: !!mbMd || !!myMd,
    [css[`c-spacer--mb-sm-${mbSm || mySm}`]]: !!mbSm || !!mySm,
    [css[`c-spacer--mb-xs-${mbXs || myXs}`]]: !!mbXs || !!myXs,
    [css[`c-spacer--ml-lg-${mlLg || mxLg}`]]: !!mlLg || !!mxLg,
    [css[`c-spacer--ml-md-${mlMd || mxMd}`]]: !!mlMd || !!mxMd,
    [css[`c-spacer--ml-sm-${mlSm || mxSm}`]]: !!mlSm || !!mxSm,
    [css[`c-spacer--ml-xs-${mlXs || mxXs}`]]: !!mlXs || !!mxXs,
    [css[`c-spacer--mr-lg-${mrLg || mxLg}`]]: !!mrLg || !!mxLg,
    [css[`c-spacer--mr-md-${mrMd || mxMd}`]]: !!mrMd || !!mxMd,
    [css[`c-spacer--mr-sm-${mrSm || mxSm}`]]: !!mrSm || !!mxSm,
    [css[`c-spacer--mr-xs-${mrXs || mxXs}`]]: !!mrXs || !!mxXs
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
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
  myLg: PropTypes.number,
  myMd: PropTypes.number,
  mySm: PropTypes.number,
  myXs: PropTypes.number,
  mlLg: PropTypes.number,
  mlMd: PropTypes.number,
  mlSm: PropTypes.number,
  mlXs: PropTypes.number,
  mrLg: PropTypes.number,
  mrMd: PropTypes.number,
  mrSm: PropTypes.number,
  mrXs: PropTypes.number,
  mxLg: PropTypes.number,
  mxMd: PropTypes.number,
  mxSm: PropTypes.number,
  mxXs: PropTypes.number,
  inline: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
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
  myLg: null,
  myMd: null,
  mySm: null,
  myXs: null,
  mlLg: null,
  mlMd: null,
  mlSm: null,
  mlXs: null,
  mrLg: null,
  mrMd: null,
  mrSm: null,
  mrXs: null,
  mxLg: null,
  mxMd: null,
  mxSm: null,
  mxXs: null,
  children: null,
  inline: false
};

export default Spacer;
