import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../components/atom/button/Button';

export default {
  title: 'Button',
  component: Button
};

export const Default = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);
export const Primary = () => (
  <Button primary onClick={action('clicked')}>
    Hello Button
  </Button>
);
export const Danger = () => (
  <Button danger onClick={action('clicked')}>
    Hello Button
  </Button>
);
export const Success = () => (
  <Button success onClick={action('clicked')}>
    Hello Button
  </Button>
);
