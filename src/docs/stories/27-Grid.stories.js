import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Form from '../../components/organism/form/Form';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';
import FormActions from '../../components/molecule/form-actions/FormActions';
import Button from '../../components/atom/button/Button';

export default {
  title: 'Grid',
  component: Grid
};

export const Default = () => (
  <Wrapper style={{ maxWidth: '100%' }}>
    <Form onSubmit={() => {}}>
      <Grid fluid>
        <FormRow>
          <FormGroup lg={12}>
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
          <FormGroup lg={12}>
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
          <FormGroup md={4}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
          <FormGroup md={4}>
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
          <FormGroup md={4}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
          <FormGroup md={4}>
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
          <Button>Limpar filtros</Button>
          <Button success type="primary" submit>
            Filtrar
          </Button>
        </FormActions>
      </Grid>
    </Form>
  </Wrapper>
);
