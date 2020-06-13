import React, { useState } from 'react';
import Switcher from '../../components/atom/switcher/Switcher';

export default {
  title: 'Switcher',
  component: Switcher
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return <Switcher checked={value} onChange={() => setValue(!value)} />;
};
