const { createJestConfig } = require('@craco/craco');

const cracoConfig = require('./craco.config.js');
const jestConfig = createJestConfig(cracoConfig);

module.exports = {
    ...jestConfig,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '@root/(.*)$': '<rootDir>/../../$1',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
};
