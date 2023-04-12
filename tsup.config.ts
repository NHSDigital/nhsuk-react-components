import { defineConfig } from 'tsup';

export default defineConfig((options) => [
  {
    clean: !!options.watch,
    sourcemap: true,
    treeshake: 'recommended',
    target: 'es5',
    format: ['esm', 'cjs'],
    dts: true,
    entry: ['./src/index.ts', './src/deprecated/index.ts'],
    outDir: 'dist/',
  },
  //   {
  //     clean: !!options.watch,
  //     sourcemap: true,
  //     treeshake: 'recommended',
  //     target: 'es5',
  //     format: ['esm', 'cjs'],
  //     dts: true,
  //     entry: ['!src/**/*.test.ts?(x)', 'src/components/**/*.ts?(x)'],
  //     outDir: 'lib/',
  //     esbuildOptions(options) {
  //       options.outbase = 'src/';
  //     },
  //   },
]);
