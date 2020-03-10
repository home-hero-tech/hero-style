import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CardItem from './CardItem';

describe('CardItem', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<CardItem label="Label" value="Value" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
