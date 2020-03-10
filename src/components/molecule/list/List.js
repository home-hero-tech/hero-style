import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import css from './List.module.scss';

const List = ({ mXlg, mLg, mMd, mSm, mXs, mXxs, children }) => {
  const classes = classNames({
    [css['c-list']]: true,
    [css['c-list--mXlg']]: mXlg,
    [css['c-list--mLg']]: mLg,
    [css['c-list--mMd']]: mMd,
    [css['c-list--mSm']]: mSm,
    [css['c-list--mXs']]: mXs,
    [css['c-list--mXxs']]: mXxs
  });

  return <ul className={classes}>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  mXlg: PropTypes.bool,
  mLg: PropTypes.bool,
  mMd: PropTypes.bool,
  mSm: PropTypes.bool,
  mXs: PropTypes.bool,
  mXxs: PropTypes.bool
};

List.defaultProps = {
  children: null,
  mXlg: false,
  mLg: false,
  mMd: false,
  mSm: false,
  mXs: false,
  mXxs: false
};

export default List;
