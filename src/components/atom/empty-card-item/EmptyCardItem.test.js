import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EmptyCardItem from './EmptyCardItem';

describe('EmptyCardItem', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<EmptyCardItem label="Label" value="Value" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
