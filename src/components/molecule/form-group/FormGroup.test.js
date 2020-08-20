import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormGroup from './FormGroup';

describe('FormGroup', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<FormGroup placeholder="placeholder text" id="ipt" name="ipt" type="text" label="Text" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the snapshot with Message', () => {
    const wrapper = shallow(
      <FormGroup
        placeholder="placeholder text"
        id="ipt"
        name="ipt"
        type="text"
        label="Text"
        message="Default message"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
