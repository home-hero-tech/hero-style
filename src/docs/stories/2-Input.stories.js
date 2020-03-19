import React from 'react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Input from '../../components/atom/input/Input';
import MaskedInput from '../../components/atom/masked-input/MaskedInput';

export default {
  title: 'Input',
  component: Input
};

const _style = {
  maxWidth: '20%'
};

const _columnWrapperStyle = {
  width: 500,
  height: 180,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
};

export const Default = () => (
  <div style={_style}>
    <Input placeholder="placeholder text" id="ipt" name="ipt" value="" />
  </div>
);

export const DefaultDisabled = () => (
  <div style={_style}>
    <Input
      placeholder="placeholder text"
      id="ipt"
      name="ipt"
      value=""
      disabled
    />
  </div>
);

export const Dark = () => (
  <div style={_style}>
    <Input placeholder="placeholder text" id="ipt" name="ipt" value="" dark />
  </div>
);

export const Checkbox = () => (
  <Input
    id="ipt"
    name="ipt"
    type="checkbox"
    defaultChecked
    value="1"
    onChange={action('toggleCheck')}
  />
);

export const CheckboxDisabledSelected = () => (
  <Input
    id="ipt"
    name="ipt"
    type="checkbox"
    defaultChecked
    value="1"
    onChange={action('toggleCheck')}
    disabled
  />
);

export const CheckboxDisabledUnselected = () => (
  <Input
    id="ipt"
    name="ipt"
    type="checkbox"
    defaultChecked={false}
    value="1"
    onChange={action('toggleCheck')}
    disabled
  />
);

export const RadioButton = () => (
  <Input
    placeholder="placeholder text"
    id="ipt"
    name="ipt"
    type="radio"
    value="1"
    onChange={action('toggleRadio')}
  />
);

export const RadioButtonChecked = () => (
  <Input
    placeholder="placeholder text"
    id="ipt"
    name="ipt"
    type="radio"
    value="1"
    onChange={action('toggleRadio')}
    checked
  />
);

export const RadioButtonDisabledSelected = () => (
  <Input
    placeholder="placeholder text"
    id="ipt"
    name="ipt"
    type="radio"
    defaultChecked
    value="1"
    onChange={action('toggleRadio')}
    disabled
  />
);

export const RadioButtonDisabledUnselected = () => (
  <Input
    placeholder="placeholder text"
    id="ipt"
    name="ipt"
    type="radio"
    value="1"
    onChange={action('toggleRadio')}
    disabled
  />
);

export const Masked = () => (
  <Wrapper style={_columnWrapperStyle}>
    <MaskedInput
      type="cnpj"
      placeholder="CNPJ Input"
      onChange={action('click')}
      value=""
    />
    <MaskedInput
      type="cpf"
      placeholder="CPF Input"
      onChange={action('click')}
      value=""
    />
    <MaskedInput
      type="phone"
      placeholder="Phone Input"
      onChange={action('click')}
      value=""
    />
  </Wrapper>
);
