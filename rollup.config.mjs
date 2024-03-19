import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';

import packageJson from './package.json' assert { type: 'json' };

// suppresses warnings printed to console as part of bundling components with directives present.
const onWarnSuppression = {
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes(`"use client"`)) {
      return;
    }
    warn(warning);
  },
};

const commonPlugins = [external(), resolve(), commonjs()];

export default [
  // cjs export
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: 'bundle-base.tsconfig.json',
        compilerOptions: {
          declaration: false,
        },
      }),
      terser(),
    ],
    ...onWarnSuppression,
  },
  // esm export
  {
    input: 'src/index.ts',
    output: [
      {
        dir: packageJson.module,
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: 'bundle-base.tsconfig.json',
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist/esm',
          emitDeclarationOnly: true,
        },
      }),
      preserveDirectives(),
      terser({ compress: { directives: false } }),
    ],
    ...onWarnSuppression,
  },
  // type bundling
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [],
    plugins: [dts()],
  },
];
