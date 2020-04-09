import React from 'react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Input from '../../components/atom/input/Input';
import MaskedInput from '../../components/atom/masked-input/MaskedInput';
import FileInput from '../../components/atom/file-input/FileInput';

export default {
  title: 'Input',
  component: Input
};

const _style = {
  maxWidth: '20%'
};

const _columnWrapperStyle = {
  width: 500,
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

export const DefaultSmall = () => (
  <div style={_style}>
    <Input placeholder="Placeholder" id="ipt" name="ipt" value="" small />
  </div>
);

export const Dark = () => (
  <div style={_style}>
    <Input placeholder="placeholder text" id="ipt" name="ipt" value="" dark />
  </div>
);

export const DarkSmall = () => (
  <div style={_style}>
    <Input
      placeholder="Dark Placeholder"
      id="ipt"
      name="ipt"
      value=""
      dark
      small
    />
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

export const CheckboxSmall = () => (
  <Input
    id="ipt"
    name="ipt"
    type="checkbox"
    defaultChecked
    value="1"
    onChange={action('toggleCheck')}
    small
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
    <MaskedInput
      type="zipCode"
      placeholder="Zipcode Input"
      onChange={action('click')}
      value=""
    />
    <MaskedInput
      type="currency"
      placeholder="currency Input"
      onChange={action('click')}
      value=""
    />
  </Wrapper>
);

export const File = () => (
  <FileInput
    text="Enviar"
    id="ipt"
    name="ipt"
    onChange={action('changeFile')}
    multiple
  />
);
