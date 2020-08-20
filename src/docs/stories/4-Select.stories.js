import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/pro-light-svg-icons';
import Select from '../../components/atom/select/Select';

export default {
  title: 'Select',
  component: Select
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Coconut', label: 'Coconut' }
];

const placeholder = 'Selecione...';
const noOptionsMessage = () => 'Nenhuma opção';

export const Default = () => <Select options={options} placeholder={placeholder} value={options[3]} isClearable />;

export const withIcon = () => (
  <Select options={options} placeholder={placeholder} value={options[3]} icon={<FontAwesomeIcon icon={faLink} />} />
);

export const Dark = () => (
  <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} value={options[3]} dark />
);

export const small = () => (
  <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} small />
);

export const smallWithIcon = () => (
  <Select
    options={options}
    placeholder={placeholder}
    noOptionsMessage={noOptionsMessage}
    small
    icon={<FontAwesomeIcon icon={faLink} />}
  />
);

export const SmallDark = () => (
  <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} dark small />
);

export const MultiSelect = () => (
  <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} multiple />
);
export const SearchableOff = () => (
  <Select
    options={options}
    placeholder="Digite para encontrar uma opção"
    noOptionsMessage={noOptionsMessage}
    searchable={false}
  />
);
