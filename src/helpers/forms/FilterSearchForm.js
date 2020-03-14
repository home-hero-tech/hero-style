import React from 'react';

import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import DatePicker from '../../components/atom/datepicker/DatePicker';
import Select from '../../components/atom/select/Select';

const options = [
  { value: 'value1', label: 'Label1' },
  { value: 'value2', label: 'Label2' },
  { value: 'value3', label: 'Label3' },
  { value: 'value4', label: 'Label4' }
];

const currentOption = { value: 'value3', label: 'Label3' };

const Form = () => {
  return (
    <>
      <FormRow>
        <FormGroup md={4}>
          <Label name="ipt">Label</Label>
          <DatePicker dark />
        </FormGroup>
        <FormGroup md={4}>
          <Label name="ipt">Label</Label>
          <Select
            options={options}
            placeholder="Test"
            value={currentOption}
            dark
          />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup md={4}>
          <Label name="ipt">Label</Label>
          <DatePicker dark />
        </FormGroup>
        <FormGroup md={4}>
          <Label name="ipt">Label</Label>
          <Select
            options={options}
            placeholder="Test"
            value={currentOption}
            dark
          />
        </FormGroup>
      </FormRow>
    </>
  );
};

export default Form;
