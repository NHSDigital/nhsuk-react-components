import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: 'src/',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
};

export default config;
