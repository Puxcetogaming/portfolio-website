// client/jest.config.js

const nextJest = require('next/jest');

/**
 * Provide the path to your Next.js app to load next.config.js 
 * and .env files in your test environment.
 */
const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // testEnvironment set to 'jsdom' for React DOM testing
  testEnvironment: 'jsdom',

  // Ignores the .next folder and node_modules
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  // If you have TypeScript, these transforms let you compile TS/TSX in tests
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // If you import CSS or image files in components, map them (optional)
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
  },

  // Setup file that runs before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig returns a function that merges your custom config 
// with Next.js defaults.
module.exports = createJestConfig(customJestConfig);
