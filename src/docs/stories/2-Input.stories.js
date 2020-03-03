import React from 'react';
import Input from '../../components/atom/input/Input';

export default {
  title: 'Input',
  component: Input
};

const _style = {
  'max-width': '20%'
};

export const Default = () => (
  <div style={_style}>
    <Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'text'}></Input>
  </div>
);
