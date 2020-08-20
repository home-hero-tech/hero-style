import React from 'react';
import Heading from '../../components/atom/heading/Heading';
import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'Heading',
  component: Heading
};

const someStyle = {
  color: 'blue',
  paddingLeft: 10
};

export const level = () => (
  <Wrapper>
    <Heading level={1} title="h1 - Title" />
    <Heading level={2} title="h2 - Title" />
    <Heading level={3} title="h3 - Title" />
    <Heading level={4} title="h4 - Title" />
    <Heading level={5} title="h5 - Title" />
    <Heading level={6} title="h6 - Title" />
  </Wrapper>
);

export const withMargin = () => <Heading level={1} title="Title" withMargin />;

export const weights = () => (
  <Wrapper>
    <Heading level={1} title="Title" bold />
    <Heading level={1} title="Title" />
    <Heading level={1} title="Title" light />
  </Wrapper>
);

export const transforms = () => (
  <Wrapper>
    <Heading level={3} title="Title" uppercase />
    <Heading level={3} title="Title" lowercase />
    <Heading level={3} title="Title" capitalize />
  </Wrapper>
);

export const colors = () => (
  <Wrapper>
    <Heading level={1} title="Title" />
    <Heading level={1} title="Title" gray />
  </Wrapper>
);

export const withOtherProps = () => <Heading level={6} title="Title" style={someStyle} />;
