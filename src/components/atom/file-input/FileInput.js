/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/pro-light-svg-icons';

import Button from '../button/Button';

import fileIcon from '../../../assets/images/file-icon.svg';

import css from './FileInput.module.scss';

const FileInput = ({
  id,
  name,
  text,
  value,
  multiple,
  onChange,
  onRemove,
  className,
  disabled,
  inputProps
}) => {
  const classes = classNames(className, css['c-file'], {
    [css['c-file--disabled']]: disabled
  });

  const getHtmlForID = () => (disabled ? null : id);

  const handleChange = e => {
    if (e.target.files.length) onChange(e);
  };

  const handleRemove = e => {
    e.preventDefault();
    onRemove(e);
  };

  return (
    <div className={classes}>
      <input
        id={id}
        type="file"
        name={name}
        className={css['c-file--input']}
        onChange={handleChange}
        multiple={multiple}
        {...inputProps}
      />
      {!value ? (
        <label className={css['c-file__empty']} htmlFor={getHtmlForID()}>
          <FontAwesomeIcon icon={faUpload} size="2x" />
          <div
            className={classNames(
              css['c-file__text--primary'],
              css['c-file__text--align-center']
            )}
          >
            {text}
          </div>
        </label>
      ) : (
        <label className={css['c-file__content']} htmlFor={getHtmlForID()}>
          <img src={fileIcon} alt="file-icon" />
          <div className={css['c-file__label']}>
            <div className={css['c-file__text']}>{value.name}</div>
            <Button type="danger" container="text" onClick={handleRemove}>
              Remover arquivo
            </Button>
          </div>
        </label>
      )}
    </div>
  );
};

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  multiple: PropTypes.bool,
  value: PropTypes.instanceOf(File),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  inputProps: PropTypes.instanceOf(Object)
};

FileInput.defaultProps = {
  name: 'image',
  text: 'Carregar imagem',
  className: '',
  value: null,
  disabled: false,
  multiple: false,
  inputProps: {}
};

export default FileInput;
