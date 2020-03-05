import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Label from './Label';

describe('Label', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<Label name="lbl">Text</Label>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
