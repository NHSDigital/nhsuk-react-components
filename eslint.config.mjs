import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ignores: ['jest.config.js', '.eslintrc.js', 'rollup.config.mjs', 'dist/**/*'],
  },
  {
    files: ['src/**/*.{js,ts,tsx}', 'stories/**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      storybook,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/alt-text': 0,
      'jsx-a11y/heading-has-content': 0,
      'react-hooks/exhaustive-deps': 0,
      'no-redeclare': 'off',
    },
  },
  {
    files: ['*.stories.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
