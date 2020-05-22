import React from 'react';

import Loader from '../../components/atom/loader/Loader';

export default {
  title: 'Loader',
  component: Loader
};

export const Default = () => <Loader />;
export const Small = () => <Loader small={true} />;
export const WithText = () => <Loader text="Test" />;
