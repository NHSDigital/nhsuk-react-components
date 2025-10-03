import { join } from 'node:path';
import configPrettier from 'eslint-config-prettier/flat';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslint from '@eslint/js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import pluginTypeScript from 'typescript-eslint';

const rootPath = import.meta.dirname;
const gitignorePath = join(rootPath, '.gitignore');

export default defineConfig([
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    extends: [
      configPrettier,
      eslint.configs.recommended,
      pluginTypeScript.configs.recommended,
      pluginImport.flatConfigs.recommended,
      pluginImport.flatConfigs.typescript,
    ],
    languageOptions: {
      parser: pluginTypeScript.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        projectService: true,
        tsconfigRootDir: rootPath,
      },
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      pluginJsxA11y.flatConfigs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat['jsx-runtime'],
      'react-hooks/recommended-latest',
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'import/no-unresolved': 'off',
      'react/prop-types': 0,
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/alt-text': 0,
      'jsx-a11y/heading-has-content': 0,
      'react-hooks/exhaustive-deps': 0,
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
