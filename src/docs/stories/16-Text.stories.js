import React from 'react';

import Text from '../../components/atom/text/Text';

export default {
  title: 'Text',
  component: Text
};

export const Default = () => <Text>Default</Text>;
export const End = () => <Text end>End</Text>;
export const Center = () => <Text center>Center</Text>;
export const Lg = () => <Text lg>Text</Text>;
export const Sm = () => <Text sm>Text</Text>;
export const Xs = () => <Text xs>Text</Text>;
export const Uppercase = () => <Text uppercase>Uppercase</Text>;
export const Fill = () => <Text fill>Fill all the spaces</Text>;
export const Primary = () => <Text primary>Primary</Text>;
export const Success = () => <Text success>Success</Text>;
export const Danger = () => <Text danger>Danger</Text>;
export const Warning = () => <Text warning>Warning</Text>;
export const Ellipsis = () => (
  <div style={{ width: 200 }}>
    <Text ellipsis>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </Text>
  </div>
);
