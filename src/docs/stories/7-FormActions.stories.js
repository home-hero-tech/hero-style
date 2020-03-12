import React from 'react';
import { action } from '@storybook/addon-actions';

import { Grid } from 'react-flexbox-grid';
import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import FormActions from '../../components/molecule/form-actions/FormActions';
import Button from '../../components/atom/button/Button';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';

export default {
  title: 'FormActions',
  component: FormActions
};

const _style = {
  maxWidth: '50%'
};

export const Default = () => (
  <div style={_style}>
    <Form onSubmit={action('submitted')}>
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
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup md>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
            />
          </FormGroup>
        </FormRow>
        <FormActions>
          <Button type="submit">Submit</Button>
          <Button onClick={action('cancel')}>Cancel</Button>
        </FormActions>
      </Grid>
    </Form>
  </div>
);

export const AlignBetween = () => (
  <div style={_style}>
    <Form onSubmit={action('submitted')}>
      <Grid fluid>
        <FormRow>
          <FormGroup md xs={12}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
          <FormGroup md xs={12}>
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
        </FormRow>
        <FormActions alignBetween>
          <Button type="submit">Submit</Button>
          <Button onClick={action('cancel')}>Cancel</Button>
        </FormActions>
      </Grid>
    </Form>
  </div>
);

export const AlignEnd = () => (
  <div style={_style}>
    <Form onSubmit={action('submitted')}>
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
              id="ipt"
              name="ipt"
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
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
        </FormRow>
        <FormActions alignEnd>
          <Button type="submit">Submit</Button>
          <Button onClick={action('cancel')}>Cancel</Button>
        </FormActions>
      </Grid>
    </Form>
  </div>
);
