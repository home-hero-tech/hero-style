import React from 'react';
import Heading from '../../components/atom/heading/Heading';

export default {
  title: 'Heading',
  component: Heading
};

const someStyle = {
  color: 'blue'
};

export const H1 = () => <Heading level={1} title="Title" />;
export const H2 = () => <Heading level={2} title="Title" />;
export const H3 = () => <Heading level={3} title="Title" />;
export const H4 = () => <Heading level={4} title="Title" />;
export const H5 = () => <Heading level={5} title="Title" />;
export const H6 = () => <Heading level={6} title="Title" />;
export const withOtherProps = () => (
  <Heading level={6} title="Title" style={someStyle} />
);
