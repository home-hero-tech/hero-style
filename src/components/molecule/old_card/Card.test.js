import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Card from './Card';
import CardItem from '../../atom/card-item/CardItem';

describe('Card', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Card>
        <CardItem label="Label" value="Value" />
      </Card>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
