import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

describe('Label', () => {
  it('should match with the snapshot', () => {
    const wrapper = renderer
      .create(<Label name={'lbl'}>Text</Label>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});