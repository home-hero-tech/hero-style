import React from 'react';
import PropTypes from 'prop-types';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import TextMaskInput from 'react-text-mask';
import Input from '../input/Input';

import { phoneMask, cnpjMask, cpfMask, zipCodeMask } from './masks';

const getMask = (maskType, maskOptions) => {
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
    case 'zipCode': {
      return zipCodeMask;
    }
    case 'currency': {
      return createNumberMask(maskOptions);
    }
    default:
      return null;
  }
};

const MaskedInput = ({ type, maskOptions, ...otherProps }) => {
  return (
    <TextMaskInput
      mask={getMask(type, maskOptions)}
      render={(ref, props) => <Input parentRef={ref} {...props} />}
      {...otherProps}
    />
  );
};

MaskedInput.propTypes = {
  type: PropTypes.oneOf(['phone', 'cnpj', 'cpf', 'zipCode', 'currency'])
    .isRequired,
  maskOptions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
};

MaskedInput.defaultProps = {
  maskOptions: {
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    allowNegative: false,
    allowLeadingZeroes: false
  }
};

export default MaskedInput;
