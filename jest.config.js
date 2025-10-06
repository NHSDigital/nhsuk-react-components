export default {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,mjs,ts,tsx}'],
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|mjs|ts|tsx)$': ['babel-jest', { rootMode: 'upward' }],
  },
};
