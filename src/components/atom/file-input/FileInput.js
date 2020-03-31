import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/pro-light-svg-icons';
import css from './FileInput.module.scss';

const FileInput = ({ id, name, text, mult, ...props }) => {
  return (
    <div className={css['c-file']}>
      {mult ? (
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
  mult: PropTypes.bool
};

FileInput.defaultProps = {
  id: null,
  name: null,
  text: '',
  mult: false
};

export default FileInput;
