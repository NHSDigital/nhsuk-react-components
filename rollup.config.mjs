import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import tsPaths from 'rollup-plugin-tsconfig-paths';
import preserveDirectives from 'rollup-plugin-preserve-directives';

import tsBuildConfig from './bundle-base.tsconfig.json' with { type: 'json' };
import packageJson from './package.json' with { type: 'json' };

// suppresses warnings printed to console as part of bundling components with directives present.
const onWarnSuppression = {
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes(`"use client"`)) {
      return;
    }
    warn(warning);
  },
};

const commonPlugins = [
  external(),
  tsPaths(),
  resolve({ extensions: ['.mjs', '.js', '.ts', '.tsx'] }),
  commonjs(),
];

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
          declaration: false,
          emitDeclarationOnly: false,
          outDir: undefined,
        },
      }),
      preserveDirectives(),
      terser({ compress: { directives: false } }),
    ],
    ...onWarnSuppression,
  },

  // d.ts bundle  ⬅️ only changes are here
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],

    // Keep styles and React types external so dts doesn't try to inline them
    external: [
      /^react($|\/)/,
      /^react-dom($|\/)/,
      /^@types\/react($|\/)/,
      /^@types\/react-dom($|\/)/,
    ],

    plugins: [
      dts({
        respectExternal: true,
        // helps avoid lib type conflicts; also carry through your tsconfig paths
        compilerOptions: {
          skipLibCheck: true,
          paths: tsBuildConfig.compilerOptions.paths,
        },
      }),
    ],
  },
];
