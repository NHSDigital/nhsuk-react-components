const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const jestConfig = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};

module.exports = jestConfig;
