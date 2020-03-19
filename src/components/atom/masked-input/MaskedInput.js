import React from 'react';
import PropTypes from 'prop-types';

import TextMaskInput from 'react-text-mask';
import Input from '../input/Input';

import { phoneMask, cnpjMask, cpfMask } from './masks';

const getMask = maskType => {
  switch (maskType) {
    case 'phone': {
      return phoneMask;
    }
    case 'cnpj': {
      return cnpjMask;
    }
    case 'cpf': {
      return cpfMask;
    }
    default:
      return null;
  }
};

const MaskedInput = ({ type, ...otherProps }) => {
  return (
    <TextMaskInput
      mask={getMask(type)}
      render={(ref, props) => <Input parentRef={ref} {...props} />}
      {...otherProps}
    />
  );
};

MaskedInput.propTypes = {
  type: PropTypes.oneOf(['phone', 'cnpj', 'cpf']).isRequired
};

export default MaskedInput;
