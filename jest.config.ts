import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/public/',
    '<rootDir>/dist/',
    '<rootDir>/scripts/',
    '<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  moduleNameMapper: {
    "/^~react-pages": "<rootDir>/modules.d.ts"
  }
};

export default config;