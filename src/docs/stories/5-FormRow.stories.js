import React from 'react';

import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/formGroup/FormGroup';

export default {
  title: 'FormRow',
  component: FormRow
};

const _style = {
  'max-width': '20%'
};

export const Default = () => (
  <div style={_style}>
    <Form>
      <FormRow>
        <FormGroup
          placeholder="placeholder text"
          id="ipt"
          name="ipt"
          type="text"
          label="Text"
        />
      </FormRow>
      <FormRow>
        <FormGroup
          placeholder="placeholder text"
          id="ipt"
          name="ipt"
          type="text"
          label="Text"
        />
      </FormRow>
    </Form>
  </div>
);
