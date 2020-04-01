import React from 'react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Button from '../../components/atom/button/Button';
import Spacer from '../../components/atom/spacer/Spacer';

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
