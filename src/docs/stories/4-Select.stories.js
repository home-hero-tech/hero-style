import React from 'react';
import Select from '../../components/atom/select/Select';

export default {
  title: 'Select',
  component: Select
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Coconut', label: 'Coconut' },
];

const placeholder = 'Selecione...';
const noOptionsMessage = () => 'Nenhuma opção';

export const Default = () => (
  <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage}></Select>
);
