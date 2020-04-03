import React from 'react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Button from '../../components/atom/button/Button';
import Label from '../../components/atom/label/Label';
import Spacer from '../../components/molecule/spacer/Spacer';

export default {
  title: 'Spacer',
  component: Spacer
};

export const marginTop = () => (
  <Wrapper>
    <Button type="primary" size={1} onClick={action('clicked')}>
      Button
    </Button>
    <Spacer mtLg={1} mtMd={2} mtSm={3} mtXs={4}>
      <Button type="primary" size={2} onClick={action('clicked')}>
        Button
      </Button>
    </Spacer>
  </Wrapper>
);

export const marginBottom = () => (
  <Wrapper>
    <Spacer mbLg={1} mbMd={2} mbSm={3} mbXs={4}>
      <Button type="primary" size={1} onClick={action('clicked')}>
        Button
      </Button>
    </Spacer>
    <Button type="primary" size={2} onClick={action('clicked')}>
      Button
    </Button>
  </Wrapper>
);

export const marginTopAndBottom = () => (
  <Wrapper>
    <Button type="primary" size={1} onClick={action('clicked')}>
      Button
    </Button>
    <Spacer myLg={3} myMd={2} mySm={3} myXs={4}>
      <Button type="primary" size={1} onClick={action('clicked')}>
        Button
      </Button>
    </Spacer>
    <Button type="primary" size={2} onClick={action('clicked')}>
      Button
    </Button>
  </Wrapper>
);

export const marginLeft = () => (
  <Wrapper style={{ display: 'flex' }}>
    <Label>Texte 1</Label>
    <Spacer mlLg={1} mlMd={2} mlSm={3} mlXs={4}>
      <Label>Text with margin left</Label>
    </Spacer>
  </Wrapper>
);

export const marginRight = () => (
  <Wrapper style={{ display: 'flex' }}>
    <Spacer mrLg={1} mrMd={2} mrSm={3} mrXs={4}>
      <Label>Text with margin right</Label>
    </Spacer>
    <Label>Texte 1</Label>
  </Wrapper>
);

export const marginLeftAndRight = () => (
  <Wrapper style={{ display: 'flex' }}>
    <Label>Texte 1</Label>
    <Spacer mxLg={1} mxMd={2} mxSm={3} mxXs={4}>
      <Label>Text with margin left and right</Label>
    </Spacer>
    <Label>Texte 2</Label>
  </Wrapper>
);
