import React from 'react';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Line from '../../components/atom/line/Line';

export default {
  title: 'Line',
  component: Line
};

export const Default = () => (
  <Wrapper style={{ maxWidth: '100%' }}>
    <Line />
  </Wrapper>
);
