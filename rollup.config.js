import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

// eslint-disable-next-line @typescript-eslint/no-var-requires
import packageJson from './package.json';

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ typescript: require('typescript') }),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true },
    ],
    plugins,
  },
  {
    input: 'src/deprecated/index.ts',
    output: [
      { file: 'dist/deprecated.js', format: 'cjs', sourcemap: true },
      { file: 'dist/deprecated.es.js', format: 'esm', sourcemap: true },
    ],
    plugins,
  },
];
