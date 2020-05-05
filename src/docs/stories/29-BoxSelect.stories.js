import React, { useState } from 'react';
import { faPlane, faShip, faTruck } from '@fortawesome/pro-light-svg-icons';

import BoxSelect from '../../components/molecule/box-select/BoxSelect';

export default {
  title: 'BoxSelect',
  component: BoxSelect
};

const options = [
  {
    id: 1,
    label: 'Opção 1',
    value: '1',
    icon: faPlane
  },
  {
    id: 2,
    label: 'Opção 2',
    value: '2',
    icon: faShip
  },
  {
    id: 3,
    label: 'Opção 3',
    value: '3',
    icon: faTruck
  }
];

export const Default = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 800 }}>
      <BoxSelect selected={selected} options={options} onChange={setSelected} />
    </div>
  );
};

export const Squared = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 500 }}>
      <BoxSelect
        noCheck
        selected={selected}
        options={options}
        onChange={setSelected}
        shape="squared"
      />
    </div>
  );
};
