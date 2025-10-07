const { NODE_ENV } = process.env;

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
        runtime: 'automatic',
        useBuiltIns: true,
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      browserslistEnv: 'node',
      plugins: [
        // Override package.json "imports" for Jest to use sources
        // otherwise a build step to output `./dist` is necessary
        [
          'module-resolver',
          {
            alias: {
              '#components': './src/components',
              '#patterns': './src/patterns',
              '#util': './src/util',
              'nhsuk-react-components': './src/index.ts',
            },
          },
        ],
        // Remove mandatory ES module file extensions for Jest
        // https://nodejs.org/api/esm.html#mandatory-file-extensions
        [
          'replace-import-extension',
          {
            extMapping: {
              '.js': '',
            },
          },
        ],
      ],
    },
  },
};
