import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    icon: <FontAwesomeIcon icon={faPlane} size="2x" />
  },
  {
    id: 2,
    label: 'Opção 2',
    value: '2',
    icon: <FontAwesomeIcon icon={faShip} size="2x" />
  },
  {
    id: 3,
    label: 'Opção 3',
    value: '3',
    icon: <FontAwesomeIcon icon={faTruck} size="2x" />
  }
];

export const Default = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 800 }}>
      <CardSelect noCheck selected={selected} options={options} onChange={setSelected} />
    </div>
  );
};

export const Small = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 800 }}>
      <CardSelect type="small" selected={selected} options={options} onChange={setSelected} />
    </div>
  );
};

export const Multiple = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div style={{ padding: 12, width: 800 }}>
      <CardSelect multiple selected={selected} options={options} onChange={setSelected} />
    </div>
  );
};

export const Text = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ padding: 12, width: 800 }}>
      <CardSelect type="text" flex="col" selected={selected} options={options} onChange={setSelected} />
    </div>
  );
};
