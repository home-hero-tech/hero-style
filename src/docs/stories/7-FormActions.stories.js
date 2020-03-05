import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import FormActions from '../../components/molecule/form-actions/FormActions';
import Button from '../../components/atom/button/Button';

export default {
  title: 'FormActions',
  component: FormActions
};

const _style = {
  maxWidth: '400px'
};

export const Default = () => (
  <div style={_style}>
    <Form onSubmit={action('submitted')}>
      <FormRow>
        <FormGroup
          placeholder="placeholder text"
          id="ipt"
          name="ipt"
          type="text"
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
      <FormActions>
        <Button type="submit">Submit</Button>
        <Button onClick={action('cancel')}>Cancel</Button>
      </FormActions>
    </Form>
  </div>
);

export const AlignBetween = () => (
  <div style={_style}>
    <Form onSubmit={action('submitted')}>
      <FormRow>
        <FormGroup
          placeholder="placeholder text"
          id="ipt"
          name="ipt"
          type="text"
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
      <FormActions alignBetween>
        <Button type="submit">Submit</Button>
        <Button onClick={action('cancel')}>Cancel</Button>
      </FormActions>
    </Form>
  </div>
);

export const AlignEnd = () => (
  <div style={_style}>
    <Form onSubmit={action('submitted')}>
      <FormRow>
        <FormGroup
          placeholder="placeholder text"
          id="ipt"
          name="ipt"
          type="text"
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
      <FormActions alignEnd>
        <Button type="submit">Submit</Button>
        <Button onClick={action('cancel')}>Cancel</Button>
      </FormActions>
    </Form>
  </div>
);
