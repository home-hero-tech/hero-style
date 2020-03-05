import React from 'react';

import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';

export default {
  title: 'Form',
  component: Form
};

const _style = {
  maxWidth: '400px'
};

export const Default = () => (
  <div style={_style}>
    <Form onSubmit={() => {}}>
      <FormRow>
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
