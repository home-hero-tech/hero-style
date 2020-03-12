import React from 'react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Button from '../../components/atom/button/Button';

export default {
  title: 'Button',
  component: Button
};

const _wrapperStyle = {
  margin: 10,
  display: 'flex',
  justifyContent: 'space-around'
};

const _columnWrapperStype = {
  ..._wrapperStyle,
  width: 140,
  height: 150,
  flexDirection: 'column'
};

export const Sizes = () => (
  <Wrapper style={_columnWrapperStype}>
    <Button type="primary" size={1} onClick={action('clicked')}>
      Button
    </Button>
    <Button type="primary" size={2} onClick={action('clicked')}>
      Button
    </Button>
    <Button type="primary" size={3} onClick={action('clicked')}>
      Button
    </Button>
    <Button type="primary" size={4} onClick={action('clicked')}>
      Button
    </Button>
  </Wrapper>
);

export const Types = () => (
  <Wrapper style={{ ..._wrapperStyle, width: 500 }}>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="danger">Danger</Button>
    <Button type="success">Success</Button>
  </Wrapper>
);

export const Shapes = () => (
  <Wrapper style={{ ..._wrapperStyle, width: 210 }}>
    <Button type="primary" onClick={action('clicked')}>
      Rounded
    </Button>
    <Button type="primary" shape="squared" onClick={action('clicked')}>
      Squared
    </Button>
  </Wrapper>
);

export const Containers = () => (
  <Wrapper style={{ ..._wrapperStyle, width: 310 }}>
    <Button type="primary">Contained</Button>
    <Button type="primary" container="outlined">
      Outlined
    </Button>
    <Button type="primary" container="text">
      Text
    </Button>
  </Wrapper>
);
