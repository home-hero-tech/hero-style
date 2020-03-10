import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../../components/atom/input/Input';

export default {
  title: 'Input',
  component: Input
};

const _style = {
  maxWidth: '20%'
};

export const Default = () => (
  <div style={_style}>
    <Input placeholder="placeholder text" id="ipt" name="ipt" />
  </div>
);

export const DefaultDisabled = () => (
  <div style={_style}>
    <Input placeholder="placeholder text" id="ipt" name="ipt" disabled />
  </div>
);

export const Dark = () => (
  <div style={_style}>
    <Input placeholder="placeholder text" id="ipt" name="ipt" dark />
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
