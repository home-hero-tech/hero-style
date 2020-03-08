import React from 'react';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';

export default {
  title: 'FormGroup',
  component: FormGroup
};

const _style = {
  'max-width': '20%'
};

export const Default = () => (
  <div style={_style}>
    <FormGroup>
      <Label name="ipt">Label</Label>
      <Input 
        id="ipt" 
        name="ipt" 
        type="text" 
        placeholder="Placeholder text"
        value="">
      </Input>
    </FormGroup>
  </div>
);
export const Message = () => (
  <div style={_style}>
    <FormGroup>
      <Label name="ipt" >Label</Label>
      <Input 
        id="ipt" 
        name="ipt" 
        type="text" 
        placeholder="Placeholder text"
        value="">
      </Input>
      <small>Default message</small>
    </FormGroup>
  </div>
);
export const Error = () => (
  <div style={_style}>
    <FormGroup error>
      <Label name="ipt" >Label</Label>
      <Input 
        id="ipt" 
        name="ipt" 
        type="text" 
        value="m@m">

      </Input>
    </FormGroup>
  </div>
);
export const ErrorMessage = () => (
  <div style={_style}>
    <FormGroup error>
      <Label name="ipt" >Label</Label>
      <Input 
        id="ipt" 
        name="ipt" 
        type="text" 
        value="m@m">

      </Input>
      <small>Please, verify</small>
    </FormGroup>
  </div>
);
export const Success = () => (
  <div style={_style}>
    <FormGroup success>
      <Label name="ipt" >Label</Label>
      <Input
        id="ipt"
        name="ipt"
        type="text"
        value="m@m.com">

      </Input>
    </FormGroup>
  </div>
);