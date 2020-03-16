import React from 'react';

import Text from '../../components/atom/text/Text';

export default {
  title: 'Text',
  component: Text
};

export const Default = () => <Text>Some test</Text>;
export const End = () => <Text end>Some test</Text>;
export const Center = () => <Text center>Some test</Text>;
