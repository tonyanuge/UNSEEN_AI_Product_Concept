/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      displayName: 'API',
      testMatch: ['<rootDir>/apps/api/src/**/*.test.{js,ts}'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/apps/api/jest.setup.js'],
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/apps/api/src/$1',
      },
    },
    {
      displayName: 'Web',
      testMatch: ['<rootDir>/apps/web/src/**/*.test.{js,ts,tsx}'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/apps/web/jest.setup.js'],
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/apps/web/src/$1',
      },
    },
    {
      displayName: 'UI',
      testMatch: ['<rootDir>/packages/ui/src/**/*.test.{js,ts,tsx}'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/packages/ui/jest.setup.js'],
    },
    {
      displayName: 'Lib',
      testMatch: ['<rootDir>/packages/lib/src/**/*.test.{js,ts}'],
      testEnvironment: 'node',
    },
  ],
  collectCoverageFrom: [
    '**/*.{js,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/.next/**',
    '!**/coverage/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};