const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const jestConfig = {
  testEnvironment: 'jsdom',
  rootDir: './src',
  setupFilesAfterEnv: ['<rootDir>/../setup/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        babelConfig: {
          plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!nhsuk-frontend/packages)'],
};

module.exports = jestConfig;
