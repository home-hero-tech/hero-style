import React from 'react';

import Button from '../../components/atom/button/Button';
import Modal from '../../components/organism/modal/Modal';
import ModalActions from '../../components/molecule/modal-actions/ModalActions';
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
    <Modal isOpen={isOpen}>
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const left = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal isOpen={isOpen} left>
      <SomeContent />
    </Modal>
  </Wrapper>
);

export const right = () => (
  <Wrapper style={style}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime!
    <Modal isOpen={isOpen} right>
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
      onConfirm={() => console.log('Confirm')}
      onCancel={() => console.log('Cancel')}
    >
      <SomeContent />
    </Modal>
  </Wrapper>
);
