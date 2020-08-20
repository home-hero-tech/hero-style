import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Pagination activePage={1} totalItemsCount={450} pageRangeDisplayed={5} onChange={() => {}} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
