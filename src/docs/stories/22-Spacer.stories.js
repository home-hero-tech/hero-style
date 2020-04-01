import React from 'react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Button from '../../components/atom/button/Button';
import Spacer from '../../components/molecule/spacer/Spacer';

export default {
  title: 'Spacer',
  component: Spacer
};

export const marginTop = () => (
  <Wrapper>
    <Button type="primary" size={1} onClick={action('clicked')}>
      Button
    </Button>
    <Spacer mtLg={1} mtMd={2} mtSm={3} mtXs={4}>
      <Button type="primary" size={2} onClick={action('clicked')}>
        Button
      </Button>
    </Spacer>
  </Wrapper>
);

export const marginBottom = () => (
  <Wrapper>
    <Spacer mbLg={1} mbMd={2} mbSm={3} mbXs={4}>
      <Button type="primary" size={1} onClick={action('clicked')}>
        Button
      </Button>
    </Spacer>
    <Button type="primary" size={2} onClick={action('clicked')}>
      Button
    </Button>
  </Wrapper>
);

export const marginTopAndBottom = () => (
  <Wrapper>
    <Button type="primary" size={1} onClick={action('clicked')}>
      Button
    </Button>
    <Spacer mxLg={3} mxMd={2} mxSm={3} mxXs={4}>
      <Button type="primary" size={1} onClick={action('clicked')}>
        Button
      </Button>
    </Spacer>
    <Button type="primary" size={2} onClick={action('clicked')}>
      Button
    </Button>
  </Wrapper>
);
