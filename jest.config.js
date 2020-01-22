module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
};
