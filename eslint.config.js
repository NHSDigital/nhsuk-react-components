import { join } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import configPrettier from 'eslint-config-prettier/flat';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginNodeImport from 'eslint-plugin-node-import';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import pluginTypeScript from 'typescript-eslint';

const rootPath = import.meta.dirname;
const gitignorePath = join(rootPath, '.gitignore');

export default defineConfig([
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    extends: [
      eslint.configs.recommended,
      pluginTypeScript.configs.recommended,
      pluginNodeImport.configs['flat/recommended'],
      configPrettier,
    ],
    languageOptions: {
      parser: pluginTypeScript.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        projectService: true,
        tsconfigRootDir: rootPath,
      },
    },
    rules: {
      // Prefer rules that are type aware
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      pluginJsxA11y.flatConfigs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat['jsx-runtime'],
      pluginReactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{cjs,js,mjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: globals.jest,
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: { '@typescript-eslint/no-unused-vars': 'off' },
  },
  globalIgnores(['**/coverage/', '**/dist/']),
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
]);
