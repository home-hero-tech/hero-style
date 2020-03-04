import React from 'react';
import renderer from 'react-test-renderer';
import FormGroup from './FormGroup';

describe('FormGroup', () => {
  it('should match with the snapshot', () => {
    const wrapper = renderer
      .create(<FormGroup  placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'text'} label={'Text'}></FormGroup>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match with the snapshot with Message', () => {
    const wrapper = renderer
      .create(<FormGroup  placeholder={'placeholder text'} id={'ipt'} name={'ipt'} type={'text'} label={'Text'} message={'Default message'}></FormGroup>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});