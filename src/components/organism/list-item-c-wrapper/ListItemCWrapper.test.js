import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListItemCWrapper from './ListItemCWrapper';
import CardItem from '../../atom/card-item/CardItem';
import ListItemContent from '../../molecule/list-item-content/ListItemContent';

describe('ListItemCWrapper', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <ListItemCWrapper>
        <ListItemContent>
          <CardItem value="Value" label="Label" />
          <CardItem value="Value" label="Label" />
          <CardItem value="Value" label="Label" />
        </ListItemContent>
      </ListItemCWrapper>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
