import React from 'react';

import Tooltip from '../../components/molecule/tooltip/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip
};

export const Default = () => (
  <Tooltip description="Some description" animation="perspective">Hover me</Tooltip>
);
