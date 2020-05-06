import React, { useState } from 'react';
import { faPlane, faShip, faTruck } from '@fortawesome/pro-light-svg-icons';

import CardSelect from '../../components/molecule/card-select/CardSelect';

export default {
  title: 'CardSelect',
  component: CardSelect
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
      <CardSelect
        noCheck
        selected={selected}
        options={options}
        onChange={setSelected}
      />
    </div>
  );
};

export const Small = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 500 }}>
      <CardSelect
        type="small"
        selected={selected}
        options={options}
        onChange={setSelected}
      />
    </div>
  );
};

export const Text = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 500 }}>
      <CardSelect
        type="text"
        flex="col"
        selected={selected}
        options={options}
        onChange={setSelected}
      />
    </div>
  );
};
