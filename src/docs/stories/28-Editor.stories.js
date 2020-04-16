import React from 'react';

import Editor from '../../components/molecule/editor/Editor';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'Editor',
  component: Editor
};

const input =
  // eslint-disable-next-line max-len
  '<ul><li>Fast and lightweight</li><li>Semantic markup</li><li>Standardized HTML between browsers</li><li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li></ul>';

export const Default = () => {
  return (
    <Wrapper>
      <Editor value={input} />
    </Wrapper>
  );
};

export const WithoutToolbar = () => {
  return (
    <Wrapper>
      <Editor value={input} toolbar={false} />
    </Wrapper>
  );
};
