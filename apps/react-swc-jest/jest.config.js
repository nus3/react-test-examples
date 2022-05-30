/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              // REF: https://swc.rs/docs/configuration/compilation#jsctransformreactruntime
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  // REF: https://github.com/swc-project/jest#q--a
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/file.js'
  },
  testMatch: ['<rootDir>/**/?(*.)(spec|test).(ts|js)?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/vrt/']
};
