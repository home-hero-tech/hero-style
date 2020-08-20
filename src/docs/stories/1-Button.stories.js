import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-light-svg-icons';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Button from '../../components/atom/button/Button';

export default {
  title: 'Button',
  component: Button
};

const _wrapperStyle = {
  margin: 10,
  display: 'flex'
};

const _columnWrapperStype = {
  ..._wrapperStyle,
  justifyContent: 'space-around',
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
  <Wrapper style={{ ..._wrapperStyle, maxWidth: '100%' }}>
    <Button disabled onClick={action('clicked')}>
      Disabled
    </Button>
    <Button type="default" onClick={action('clicked')}>
      Default
    </Button>
    <Button type="primary" onClick={action('clicked')}>
      Primary
    </Button>
    <Button type="secondary" onClick={action('clicked')}>
      Secondary
    </Button>
    <Button type="danger" onClick={action('clicked')}>
      Danger
    </Button>
    <Button type="success" onClick={action('clicked')}>
      Success
    </Button>
    <Button type="default" noShadow onClick={action('clicked')}>
      No Shadow
    </Button>
  </Wrapper>
);

export const Loading = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Wrapper style={{ ..._wrapperStyle, maxWidth: '100%' }}>
      <Button size={2} type="primary" loading={loading} onClick={() => setLoading(!loading)}>
        Click Me
      </Button>
      <Button size={4} type="primary" loading={loading} onClick={() => setLoading(!loading)}>
        Click Me
      </Button>
    </Wrapper>
  );
};

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
    <Button type="primary" onClick={action('clicked')}>
      Contained
    </Button>
    <Button type="primary" container="outlined" onClick={action('clicked')}>
      Outlined
    </Button>
    <Button type="primary" container="text" onClick={action('clicked')}>
      Text
    </Button>
  </Wrapper>
);

export const WithSvg = () => (
  <Wrapper style={{ ..._wrapperStyle, maxWidth: '100%' }}>
    <Button type="primary" onClick={action('clicked')} hasSVG>
      <FontAwesomeIcon icon={faPlus} /> Text
    </Button>
  </Wrapper>
);
