module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Collect coverage information while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  // moduleDirectories: [
  //   'node_modules',
  // ],

  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|jpeg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },

  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },

  transformIgnorePatterns: [
    "<rootDir>/node_modules/", //(?!(react|react-dom)/)
  ],

  testURL: 'http://localhost',

  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',

  // Indicatesh whether each individual test should be reported during the run
  verbose: true,
};
