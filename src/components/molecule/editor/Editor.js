import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import './Editor.scss';

const Editor = ({ value, onChange, toolbar, ...otherProps }) => {
  return (
    <div className="c-editor">
      <ReactQuill
        modules={!toolbar ? { toolbar: null } : {}}
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
  onChange: PropTypes.func.isRequired
};

Editor.defaultProps = {
  value: '',
  toolbar: true
};

export default Editor;
