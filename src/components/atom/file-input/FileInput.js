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
  type,
  name,
  text,
  value,
  multiple,
  onChange,
  onRemove,
  className,
  disabled,
  inputProps,
  buttonProps,
  children
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

  const renderCard = () => {
    if (value) {
      return (
        <label className={css['c-file__content']} htmlFor={getHtmlForID()}>
          <img src={fileIcon} alt="file-icon" />
          <div className={css['c-file__label']}>
            <div className={css['c-file__text']}>{value.filename || value.name}</div>
            <Button type="danger" container="text" onClick={handleRemove}>
              Remover arquivo
            </Button>
          </div>
        </label>
      );
    }
    return (
      <label className={css['c-file__empty']} htmlFor={getHtmlForID()}>
        <FontAwesomeIcon icon={faUpload} size="2x" />
        <div
          className={classNames(css['c-file__text'], css['c-file__text--primary'], css['c-file__text--align-center'])}
        >
          {text}
        </div>
      </label>
    );
  };

  const renderButton = () => (
    <div className={css['c-file__button']}>
      <Button {...buttonProps} disabled={disabled}>
        <label htmlFor={disabled ? null : id}>{children || text}</label>
      </Button>
    </div>
  );

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
      {type === 'card' ? renderCard() : renderButton()}
    </div>
  );
};

FileInput.propTypes = {
  className: PropTypes.string,
  inputProps: PropTypes.instanceOf(Object),
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(['card', 'button']),
  value: PropTypes.instanceOf(Object),
  buttonProps: PropTypes.instanceOf(Object),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
};

FileInput.defaultProps = {
  className: '',
  disabled: false,
  inputProps: {},
  multiple: false,
  name: 'image',
  onChange: f => f,
  onRemove: f => f,
  text: 'Carregar imagem',
  type: 'card',
  value: null,
  buttonProps: {
    type: 'primary'
  },
  children: null
};

export default FileInput;
