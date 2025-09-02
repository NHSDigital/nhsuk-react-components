import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import tsPaths from 'rollup-plugin-tsconfig-paths';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import postcss from 'rollup-plugin-postcss';

import tsBuildConfig from './bundle-base.tsconfig.json' assert { type: 'json' };
import packageJson from './package.json' assert { type: 'json' };

const onWarnSuppression = {
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes(`"use client"`)) return;
    warn(warning);
  },
};

const commonPlugins = [
  external(),
  tsPaths(),
  resolve({ extensions: ['.mjs', '.js', '.ts', '.tsx'] }),
  commonjs(),
  // ⬇️ compile SCSS → CSS for any `import './file.scss'`
  postcss({
    extract: true,                  // or a filename like 'styles.css'
    modules: false,
    minimize: false,
    use: { sass: { quietDeps: true } }, // uses Dart Sass
    includePaths: ['node_modules'], // lets you @use "nhsuk-frontend/..." cleanly
  }),
];

// JS-only version of preserveDirectives
const jsOnlyPreserveDirectives = preserveDirectives({
  include: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
  exclude: ['**/*.{css,scss,sass,less,styl}'],
});

export default [
  // cjs export
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.main, format: 'cjs', sourcemap: true }],
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: 'bundle-base.tsconfig.json',
        compilerOptions: { declaration: false },
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
          declaration: false,          // don’t emit .d.ts here
          emitDeclarationOnly: false,
          outDir: undefined,           // let Rollup handle files
        },
      }),
      jsOnlyPreserveDirectives,                 // ⬅️ don't touch .scss
      terser({ compress: { directives: false } }),
    ],
    ...onWarnSuppression,
  },

  // type bundling
  // type bundling
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],

    // ⬅️ Ignore any style imports during .d.ts bundling
    external: [/\.s?css$/i, /\.less$/i, /\.styl(us)?$/i],

    plugins: [
      dts({
        respectExternal: true, // ⬅️ key: don't inline externals (like the styles we exclude)
        compilerOptions: {
          // carry over paths if you use them
          paths: tsBuildConfig.compilerOptions.paths,
        },
      }),
    ],
  }

];
