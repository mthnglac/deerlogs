import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
	],
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
  transform: {
    //'^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
		'^@/components/(.*)$': '<rootDir>/components/$1',
  },
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
export default config
