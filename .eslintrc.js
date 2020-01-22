module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-typescript'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'max-len': [1, 100],
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'arrow-parens': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/heading-has-content': 0,
  },
};
