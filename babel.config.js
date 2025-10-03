const { NODE_ENV } = process.env;

/**
 * Babel config
 *
 * @type {TransformOptions}
 */
module.exports = {
  browserslistEnv: 'javascripts',
  presets: [
    [
      '@babel/preset-env',
      {
        // Apply bug fixes to avoid transforms
        bugfixes: true,

        // Apply smaller "loose" transforms for browsers
        loose: true,

        // Apply ES module transforms for Jest
        // https://jestjs.io/docs/ecmascript-modules
        modules: NODE_ENV === 'test' ? 'auto' : false,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: NODE_ENV === 'development',
        useBuiltIns: true,
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      browserslistEnv: 'node',
    },
  },
};

/**
 * @import { TransformOptions } from '@babel/core'
 */
