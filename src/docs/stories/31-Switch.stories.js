import React, { useState } from 'react';
import Switch from '../../components/atom/switch/Switch';

export default {
  title: 'Switch',
  component: Switch
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return <Switch checked={value} onChange={() => setValue(!value)} />;
};
