module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:jsx-a11y/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/heading-has-content': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: { '@typescript-eslint/no-unused-vars': 'off' },
    },
  ],
};
