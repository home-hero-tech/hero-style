import React from 'react';
import { action } from '@storybook/addon-actions';
import { Grid } from 'react-flexbox-grid';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ModalForm from './ModalForm';
import FormRow from '../../molecule/form-row/FormRow';
import FormGroup from '../../molecule/form-group/FormGroup';
import Label from '../../atom/label/Label';
import Input from '../../atom/input/Input';

describe('ModalForm', () => {
  it('should match with the snapshot', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root">
        <ModalForm
          open={isOpen}
          onConfirm={() => console.log('confirm')}
          onCancel={() => console.log('onCancel')}
          contentLabel="With Actions EmptyModal"
          title="EmptyModal Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing."
          btnCancelText="Cancelling"
          btnConfirmText="Confirming"
          onRequestClose={() => console.log('onRequestClose')}
        >
          <Grid fluid style={{ padding: 0 }}>
            <FormRow>
              <FormGroup md>
                <Label name="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ex: Banheiro"
                  onChange={action('onChange')}
                  value=""
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup md>
                <Label name="idRefurbish">Nome</Label>
                <Input
                  id="idRefurbish"
                  name="idRefurbish"
                  type="text"
                  placeholder="Ex: Banheiro"
                  onChange={action('idRefurbish')}
                  value=""
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup md>
                <Label name="observation">Observações</Label>
                <Input
                  id="observation"
                  name="observation"
                  placeholder="Ativo"
                  multiple
                  onChange={action('change')}
                  value=""
                />
              </FormGroup>
            </FormRow>
          </Grid>
        </ModalForm>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
