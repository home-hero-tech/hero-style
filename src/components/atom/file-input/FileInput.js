import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/pro-light-svg-icons';
import css from './FileInput.module.scss';

const FileInput = ({ id, name, text, multiple, ...props }) => {
  return (
    <div className={css['c-file']}>
      {multiple ? (
        <input id={id} name={name} type="file" {...props} multiple />
      ) : (
        <input id={id} name={name} type="file" {...props} />
      )}
      <label htmlFor={name}>
        <FontAwesomeIcon icon={faCloudUpload} />
        <span>{text}</span>
      </label>
    </div>
  );
};

FileInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  multiple: PropTypes.bool
};

FileInput.defaultProps = {
  id: null,
  name: null,
  text: '',
  multiple: false
};

export default FileInput;
