import React from 'react';
import FormGroup from '../../components/molecule/formGroup/FormGroup';

export default {
  title: 'FormGroup',
  component: FormGroup
};

const _style = {
  'max-width': '20%'
};

export const Default = () => (
  <div style={_style}>
    <FormGroup
      placeholder="placeholder text"
      id="ipt"
      name="ipt"
      type="text"
      label="Text"
    />
    <FormGroup
      placeholder="placeholder text"
      id="ipt"
      name="ipt"
      type="text"
      label="Text"
    />
  </div>
);
export const Message = () => (
  <div style={_style}>
    <FormGroup
      placeholder="placeholder text"
      id="ipt"
      name="ipt"
      type="text"
      label="Text"
      message="Default message"
    />
  </div>
);
export const Error = () => (
  <div style={_style}>
    <FormGroup id="ipt" name="ipt" type="text" label="Text" error />
  </div>
);
export const ErrorMessage = () => (
  <div style={_style}>
    <FormGroup
      id="ipt"
      name="ipt"
      type="text"
      label="Text"
      message="Please, verify"
      error
    />
  </div>
);
export const Success = () => (
  <div style={_style}>
    <FormGroup id="ipt" name="ipt" type="text" label="Text" success />
  </div>
);
