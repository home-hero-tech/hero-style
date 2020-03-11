import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Filter from './Filter';
import Form from '../../organism/form/Form';
import FormRow from '../../molecule/form-row/FormRow';
import FormGroup from '../../molecule/form-group/FormGroup';
import FormActions from '../../molecule/form-actions/FormActions';
import Label from '../../atom/label/Label';
import Input from '../../atom/input/Input';
import Button from '../../atom/button/Button';
import { Grid } from 'react-flexbox-grid';


describe('Filter', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Filter showFilters={true} onClick={() => {}} totalItems={3}>
      <Form onSubmit={() => {}}>
        <Grid fluid>
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
            <Button success type="submit">Filtrar</Button>
          </FormActions>
        </Grid>
      </Form>
    </Filter>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
