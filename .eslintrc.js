module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    "react/jsx-one-expression-per-line": 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'react/jsx-curly-newline': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', 120],
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'import/prefer-default-export': 0,
  },
};
