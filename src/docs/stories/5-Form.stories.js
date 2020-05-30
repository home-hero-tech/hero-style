import React from 'react';

import { Grid } from 'react-flexbox-grid';
import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';

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
      <Grid fluid>
        <FormRow>
          <FormGroup md>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
          <FormGroup md>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt2"
              name="ipt2"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup md>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt3"
              name="ipt3"
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

export const Errors = () => (
  <div style={_style}>
    <Form onSubmit={() => {}}>
      <Grid fluid>
        <FormRow>
          <FormGroup md error>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
            <small>
              Lorem ipsum dolor sit consectetu ave Lorem ipsum dolor sit
              consectetu ave..
            </small>
          </FormGroup>
          <FormGroup md error>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt2"
              name="ipt2"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
            <small>Error message</small>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup md error>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt3"
              name="ipt3"
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
