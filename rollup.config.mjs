import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import tsPaths from 'rollup-plugin-tsconfig-paths';
import preserveDirectives from 'rollup-plugin-preserve-directives';

import tsBuildConfig from './bundle-base.tsconfig.json' assert { type: 'json' };
import packageJson from './package.json' assert { type: 'json' };

// suppresses warnings printed to console as part of bundling components with directives present.
const onWarnSuppression = {
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes(`"use client"`)) return;
    warn(warning);
  },
};

// Keep react 19 out of the bundle
const externals = ['react', 'react-dom', 'react/jsx-runtime'];

const commonPlugins = [
  external(),            // auto-externalize peer deps
  tsPaths(),             // respect tsconfig paths in source
  resolve({ extensions: ['.mjs', '.js', '.ts', '.tsx'] }),
  commonjs(),
];

export default [
  // CJS (single file)
  {
    input: 'src/index.ts',
    external: externals,
    output: [
      {
        file: packageJson.main, // e.g. dist/cjs/index.js
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      ...commonPlugins,
      typescript({
        // IMPORTANT: dedicated build tsconfig (noEmit, no jest/node types)
        tsconfig: './tsconfig.build.json',
      }),
      preserveDirectives(),           // keep "use client" etc.
      terser({ compress: { directives: false } }),
    ],
    ...onWarnSuppression,
  },

  // ESM (single file)
  {
    input: 'src/index.ts',
    external: externals,
    output: [
      {
        file: packageJson.module, // e.g. dist/esm/index.js
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      preserveDirectives(),
      terser({ compress: { directives: false } }),
    ],
    ...onWarnSuppression,
  },

  // Type definitions (bundled .d.ts)
  {
    input: 'src/index.ts',
    external: externals,
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        // carry over path mapping if you have any
        compilerOptions: { paths: tsBuildConfig?.compilerOptions?.paths ?? {} },
      }),
    ],
  },
];
