/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testPathIgnorePatterns: ["/dist/"],
  verbose: true,
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
