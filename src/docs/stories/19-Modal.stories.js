import React, { useState } from 'react';
import { Grid } from 'react-flexbox-grid';

import { action } from '@storybook/addon-actions';

import Modal from '../../components/organism/modal/Modal';
import EmptyModal from '../../components/organism/modal/EmptyModal';
import ModalForm from '../../components/organism/modal/ModalForm';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Input from '../../components/atom/input/Input';
import Label from '../../components/atom/label/Label';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import FormRow from '../../components/molecule/form-row/FormRow';

export default {
  title: 'Modal',
  component: Modal
};

const isOpen = true;

const style = {
  maxWidth: '100%'
};

const SomeContent = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
      quaerat?
    </div>
  );
};

export const Default = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal open={isOpen} contentLabel="Default Modal">
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const left = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal open={isOpen} left right={false} contentLabel="Default Modal">
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const right = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal open={isOpen} right contentLabel="Right Modal">
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const withActions = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal
      open={isOpen}
      onConfirm={action('Confirm')}
      onCancel={action('Cancel')}
      contentLabel="With Actions Modal"
    >
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const titleAndDescription = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal
      open={isOpen}
      contentLabel="With Actions Modal"
      title="Modal Title"
      closeTimeoutMS={3000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing."
    >
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const buttonTexts = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        onConfirm={action('Confirm')}
        onCancel={() => toggleOpen(false)}
        contentLabel="With Actions Modal"
        title="Modal Title"
        closeTimeoutMS={300}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing."
        btnCancelText="Cancel?"
        btnConfirmText="Confirm?"
        onRequestClose={() => toggleOpen(false)}
      >
        <SomeContent />
      </Modal>
    </Wrapper>
  );
};

export const _ModalForm = () => {
  const [open, toggleOpen] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <ModalForm
        open={open}
        onConfirm={handleSubmit}
        onCancel={() => toggleOpen(false)}
        contentLabel="With Actions Modal"
        title="Modal Title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing."
        btnCancelText="Cancelling"
        btnConfirmText="Confirming"
        onRequestClose={() => toggleOpen(false)}
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
    </Wrapper>
  );
};

export const _EmptyModal = () => {
  const [open, toggleOpen] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <EmptyModal
        open={open}
        onConfirm={handleSubmit}
        onCancel={() => toggleOpen(false)}
        contentLabel="With Actions Modal"
        onRequestClose={() => toggleOpen(false)}
      >
        Test
      </EmptyModal>
    </Wrapper>
  );
};
