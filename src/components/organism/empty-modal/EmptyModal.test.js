import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EmptyModal from './EmptyModal';

describe('EmptyModal', () => {
  it('should match with the snapshot', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root">
        <EmptyModal open={isOpen} contentLabel="Default EmptyModal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </EmptyModal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *right* props', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root">
        <EmptyModal open={isOpen} contentLabel="Default EmptyModal" right>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </EmptyModal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *left* props', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root">
        <EmptyModal open={isOpen} contentLabel="Default EmptyModal" left>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </EmptyModal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
