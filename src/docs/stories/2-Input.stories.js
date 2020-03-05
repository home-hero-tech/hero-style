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
    <Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'}></Input>
  </div>
);

export const DefaultDisabled = () => (
  <div style={_style}>
    <Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'} disabled></Input>
  </div>
);

export const Checkbox = () => (
  <Input id={'ipt'} name={'ipt'} type={'checkbox'} defaultChecked={true} value="1" onChange={action('toggleCheck')}></Input>
);

export const CheckboxDisabledSelected = () => (
  <Input id={'ipt'} name={'ipt'} type={'checkbox'} defaultChecked={true} value="1" onChange={action('toggleCheck')} disabled></Input>
);

export const CheckboxDisabledUnselected = () => (
  <Input id={'ipt'} name={'ipt'} type={'checkbox'} defaultChecked={false} value="1" onChange={action('toggleCheck')} disabled></Input>
);

export const RadioButton = () => (
  <Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'radio'} value="1" onChange={action('toggleRadio')}></Input>
);

export const RadioButtonDisabledSelected = () => (
  <Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'radio'} defaultChecked={true} value="1" onChange={action('toggleRadio')} disabled></Input>
);

export const RadioButtonDisabledUnselected = () => (
  <Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'radio'} value="1" onChange={action('toggleRadio')} disabled></Input>
);

