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
  width: 400,
  display: 'flex',
  justifyContent: 'space-between'
};

export const Default = () => (
  <Wrapper style={_wrapperStyle}>
    <Button onClick={action('clicked')}>Rounded</Button>

    <Button shape="squared" onClick={action('clicked')}>
      Squared
    </Button>

    <Button container="outlined" onClick={action('clicked')}>
      Outlined
    </Button>

    <Button container="text" onClick={action('clicked')}>
      Text
    </Button>
  </Wrapper>
);

export const Primary = () => (
  <Wrapper style={_wrapperStyle}>
    <Button type="primary" onClick={action('clicked')}>
      Rounded
    </Button>

    <Button type="primary" shape="squared" onClick={action('clicked')}>
      Squared
    </Button>

    <Button type="primary" container="outlined" onClick={action('clicked')}>
      Outlined
    </Button>

    <Button type="primary" container="text" onClick={action('clicked')}>
      Text
    </Button>
  </Wrapper>
);

export const Secondary = () => (
  <Wrapper style={_wrapperStyle}>
    <Button type="secondary" onClick={action('clicked')}>
      Rounded
    </Button>

    <Button type="secondary" shape="squared" onClick={action('clicked')}>
      Squared
    </Button>

    <Button type="secondary" container="outlined" onClick={action('clicked')}>
      Outlined
    </Button>

    <Button type="secondary" container="text" onClick={action('clicked')}>
      Text
    </Button>
  </Wrapper>
);

export const Danger = () => (
  <Wrapper style={_wrapperStyle}>
    <Button type="danger" onClick={action('clicked')}>
      Rounded
    </Button>

    <Button type="danger" shape="squared" onClick={action('clicked')}>
      Squared
    </Button>

    <Button type="danger" container="outlined" onClick={action('clicked')}>
      Outlined
    </Button>

    <Button type="danger" container="text" onClick={action('clicked')}>
      Text
    </Button>
  </Wrapper>
);

export const Success = () => (
  <Wrapper style={_wrapperStyle}>
    <Button type="success" onClick={action('clicked')}>
      Rounded
    </Button>

    <Button type="success" shape="squared" onClick={action('clicked')}>
      Squared
    </Button>

    <Button type="success" container="outlined" onClick={action('clicked')}>
      Outlined
    </Button>

    <Button type="success" container="text" onClick={action('clicked')}>
      Text
    </Button>
  </Wrapper>
);
