module.exports = {
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
  verbose: true,
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
    '^@data(.*)$': '<rootDir>/data$1',
    '^@layouts(.*)$': '<rootDir>/layouts$1',
    '^@style(.*)$': '<rootDir>/style$1',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
