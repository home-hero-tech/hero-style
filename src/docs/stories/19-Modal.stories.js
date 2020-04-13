import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import Modal from '../../components/organism/modal/Modal';
import ModalForm from '../../components/organism/form-modal/FormModal';
import ModalHeader from '../../components/molecule/modal-header/ModalHeader';
import ModalFooter from '../../components/molecule/modal-footer/ModalFooter';
import ModalContent from '../../components/molecule/modal-content/ModalContent';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Input from '../../components/atom/input/Input';
import Label from '../../components/atom/label/Label';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import FormRow from '../../components/molecule/form-row/FormRow';
import Button from '../../components/atom/button/Button';

export default {
  title: 'Modal',
  component: Modal
};

const isOpen = true;

const style = {
  maxWidth: '100%'
};

export const emptyModal = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const noPadding = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        hasPadding={false}
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const Width1Default = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        widthLevel={1}
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const Width2 = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        widthLevel={2}
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const Width3 = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        widthLevel={3}
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const Width4 = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        widthLevel={4}
      >
        Test
      </Modal>
    </Wrapper>
  );
};
export const Width5 = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        widthLevel={5}
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const left = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
        left
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const right = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        contentLabel="With Actions EmptyModal"
        open={open}
        onRequestClose={() => toggleOpen(false)}
        right
      >
        Test
      </Modal>
    </Wrapper>
  );
};

export const _ModalHeader = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal
      open={isOpen}
      onConfirm={action('Confirm')}
      onCancel={action('Cancel')}
      contentLabel="With Actions EmptyModal"
    >
      <ModalHeader title="Title" description="Description" />
    </Modal>
  </Wrapper>
);

export const _ModalFooter = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal
      open={isOpen}
      onConfirm={action('Confirm')}
      onCancel={action('Cancel')}
      contentLabel="With Actions EmptyModal"
    >
      <ModalFooter>
        <Button onClick={action('click')}>1st action</Button>
        <Button onClick={action('click')} type="primary">
          2nd action
        </Button>
      </ModalFooter>
    </Modal>
  </Wrapper>
);

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
        onSubmit={handleSubmit}
        contentLabel="With Actions EmptyModal"
        onRequestClose={() => toggleOpen(false)}
      >
        <ModalHeader title="Title" description="Description" />
        <ModalContent>
          <FormRow style={{ marginRight: 0 }}>
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
          <FormRow style={{ marginRight: 0 }}>
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
          <FormRow style={{ marginRight: 0 }}>
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
          <FormRow style={{ marginRight: 0 }}>
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
          <FormRow style={{ marginRight: 0 }}>
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
          <FormRow style={{ marginRight: 0 }}>
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
          <FormRow style={{ marginRight: 0 }}>
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

          <FormRow style={{ marginRight: 0 }}>
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
        </ModalContent>
        <ModalFooter>
          <Button onClick={action('click')} container="outlined" type="primary">
            Cancel
          </Button>
          <Button onClick={action('click')} type="primary" submit>
            Confirm
          </Button>
        </ModalFooter>
      </ModalForm>
    </Wrapper>
  );
};

export const boxModal = () => {
  const [open, toggleOpen] = useState(true);
  return (
    <Wrapper style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
      <button onClick={() => toggleOpen(true)}>Open</button>
      <Modal
        open={open}
        contentLabel="With Actions EmptyModal"
        center
        onRequestClose={() => toggleOpen(false)}
      >
        <ModalHeader title="Title" description="Description" />
        <ModalContent>
          <div>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button onClick={action('click')} container="outlined" type="primary">
            Cancel
          </Button>
          <Button onClick={action('click')} type="primary" submit>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </Wrapper>
  );
};
