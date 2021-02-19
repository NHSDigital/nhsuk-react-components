import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      typescript({
        typescript: require('typescript'),
        exclude: ['**/*.test.d.ts'],
      }),
    ],
  },
  {
    input: 'src/deprecated/index.ts',
    output: [
      { file: 'dist/deprecated.js', format: 'cjs' },
      { file: 'dist/deprecated.es.js', format: 'es' },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      typescript({
        typescript: require('typescript'),
        exclude: ['**/*.test.d.ts'],
      }),
    ],
  },
];
