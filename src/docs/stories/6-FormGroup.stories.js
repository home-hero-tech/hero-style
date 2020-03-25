import React from 'react';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';
import Select from '../../components/atom/select/Select';

export default {
  title: 'FormGroup',
  component: FormGroup
};

const _style = {
  'max-width': '20%'
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Coconut', label: 'Coconut' }
];

const noOptionsMessage = () => 'Nenhuma opção';

export const Default = () => (
  <div style={_style}>
    <FormGroup>
      <Label name="ipt">Label</Label>
      <Input
        id="ipt"
        name="ipt"
        type="text"
        placeholder="Placeholder text"
        value=""
      />
    </FormGroup>
  </div>
);
export const Message = () => (
  <div style={_style}>
    <FormGroup>
      <Label name="ipt">Label</Label>
      <Input
        id="ipt"
        name="ipt"
        type="text"
        placeholder="Placeholder text"
        value=""
      />
      <small>Default message</small>
    </FormGroup>
  </div>
);
export const Error = () => (
  <div style={_style}>
    <FormGroup error icon>
      <Label name="ipt">Label</Label>
      <Input id="ipt" name="ipt" type="text" value="m@m" />
    </FormGroup>
  </div>
);
export const ErrorMessage = () => (
  <div style={_style}>
    <FormGroup error icon>
      <Label name="ipt">Label</Label>
      <Input id="ipt" name="ipt" type="text" value="m@m" />
      <small>Please, verify</small>
    </FormGroup>
  </div>
);


export const ErrorMessageSelect = () => (
  <div style={_style}>
    <FormGroup error>
      <Label name="ipt">Label</Label>
      <Select
        options={options}
        placeholder="Selecione..."
        noOptionsMessage={noOptionsMessage}
        searchable={false}
      />
      <small>Please, verify</small>
    </FormGroup>
  </div>
);

export const Success = () => (
  <div style={_style}>
    <FormGroup success>
      <Label name="ipt">Label</Label>
      <Input id="ipt" name="ipt" type="text" value="m@m.com" />
    </FormGroup>
  </div>
);
