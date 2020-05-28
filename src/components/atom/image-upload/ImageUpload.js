/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload, faTrash } from '@fortawesome/pro-light-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShapeAction from '../shape-action/ShapeAction';

import css from './ImageUpload.module.scss';
import shapeActionCss from '../shape-action/ShapeAction.module.scss';

const ImageUpload = ({
  id,
  name,
  text,
  value,
  onChange,
  onRemove,
  className,
  disabled,
  inputProps
}) => {
  const wrapperClasses = classNames(className, css['c-image-input']);

  const buttonClasses = classNames(css['c-image-input__button'], {
    [css['c-image-input__button--disabled']]: disabled
  });

  const shapeActionClasses = classNames(
    shapeActionCss['c-shape-action'],
    shapeActionCss['c-shape-action--primary'],
    shapeActionCss['c-shape-action--squared'],
    shapeActionCss['c-shape-action--outlined'],
    shapeActionCss['c-shape-action--size-2']
  );

  const getFileUrl = f => URL.createObjectURL(f);

  return (
    <>
      {value ? (
        <div className={wrapperClasses}>
          <div className={css['c-image-input__content']}>
            <img src={getFileUrl(value)} alt={name} />
          </div>
          <div className={css['c-image-input__actions']}>
            <label
              className={shapeActionClasses}
              htmlFor={disabled ? null : id}
            >
              <FontAwesomeIcon icon={faCloudUpload} />
            </label>
            <ShapeAction
              type="danger"
              container="outlined"
              shape="squared"
              size={2}
            >
              <FontAwesomeIcon icon={faTrash} onClick={onRemove} />
            </ShapeAction>
          </div>
        </div>
      ) : (
        <label className={buttonClasses} htmlFor={disabled ? null : id}>
          <FontAwesomeIcon icon={faCloudUpload} />
          <span>{text}</span>
        </label>
      )}
      <input
        className={css['c-input']}
        id={id}
        name={name}
        type="file"
        accept="image/*"
        onChange={onChange}
        {...inputProps}
      />
    </>
  );
};

ImageUpload.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.instanceOf(File),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  inputProps: PropTypes.instanceOf(Object)
};

ImageUpload.defaultProps = {
  name: 'image',
  text: 'Carregar imagem',
  className: '',
  value: null,
  disabled: false,
  inputProps: {}
};

export default ImageUpload;
