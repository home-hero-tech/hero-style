import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from './Select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Coconut', label: 'Coconut' },
];

const placeholder = 'Selecione...';
const noOptionsMessage = () => 'Nenhuma opção';

describe('Select', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage}></Select>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
