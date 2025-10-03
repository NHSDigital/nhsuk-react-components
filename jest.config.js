const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.base.json');

const jestConfig = {
  testEnvironment: 'jsdom',
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
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
};

module.exports = jestConfig;
