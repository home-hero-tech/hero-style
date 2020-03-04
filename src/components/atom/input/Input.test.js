import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('Input', () => {
  it('should match with the snapshot', () => {
    const wrapper = renderer
      .create(<Input placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'text'}></Input>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});