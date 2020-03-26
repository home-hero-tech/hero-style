import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import Modal from '../../components/organism/modal/Modal';
import Wrapper from '../../helpers/wrapper/Wrapper';

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
    <Modal isOpen={isOpen} contentLabel="Default Modal">
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const left = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal isOpen={isOpen} left right={false} contentLabel="Default Modal">
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const right = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal isOpen={isOpen} right contentLabel="Right Modal">
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
      isOpen={isOpen}
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
      isOpen={isOpen}
      onConfirm={action('Confirm')}
      onCancel={action('Cancel')}
      contentLabel="With Actions Modal"
      title="Modal Title"
      closeTimeoutMS={3000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing."
    >
      <h2>blabla</h2>
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const buttonTexts = () => {
  const [open, toggleOpen] = useState(false);
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
        btnCancelText="Cancelling"
        btnConfirmText="Confirming"
        onRequestClose={() => toggleOpen(false)}
      >
        <h2>blabla</h2>
        <SomeContent />
      </Modal>
    </Wrapper>
  );
};
