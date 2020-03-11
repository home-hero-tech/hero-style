import React from 'react';

import { Grid } from 'react-flexbox-grid';
import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';

export default {
  title: 'FormRow',
  component: FormRow
};

const _style = {
  maxWidth: '20%'
};

export const Default = () => (
  <div style={_style}>
    <Form onSubmit={() => {}}>
      <Grid fluid>
        <FormRow>
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
        </FormRow>
        <FormRow>
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
        </FormRow>
      </Grid>
    </Form>
  </div>
);
