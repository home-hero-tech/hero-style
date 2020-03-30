import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FileInput from './FileInput';

describe('FileInput', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <FileInput
        text="Enviar"
        id="ipt"
        name="ipt"
        multiple
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});