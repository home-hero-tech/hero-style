import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import './Editor.scss';
import classNames from 'classnames';

const Editor = ({ value, modules, fullHeight, onChange, toolbar, rows, className, bgWhite, ...otherProps }) => {
  const optionsToolbar = modules || {};

  const classes = classNames('c-editor', `c-editor--rows-${rows}`, className, {
    'c-editor--full-height': fullHeight,
    'c-editor--bg-white': bgWhite
  });

  return (
    <div className={classes}>
      <ReactQuill
        modules={!toolbar ? { toolbar: null } : { toolbar: optionsToolbar }}
        theme="snow"
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

Editor.propTypes = {
  value: PropTypes.string,
  toolbar: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  modules: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  fullHeight: PropTypes.bool,
  bgWhite: PropTypes.bool
};

Editor.defaultProps = {
  value: '',
  className: '',
  rows: 'auto',
  toolbar: true,
  modules: null,
  fullHeight: false,
  bgWhite: false
};

export default Editor;
