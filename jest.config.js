// module.exports = {
//   "verbose": true,
//   "preset": "jest-puppeteer",
//   "roots": [
//       "<rootDir>/src"
//   ],
//   "transform": {
//       "^.+\\.ts?$": "ts-jest"
//   },
//   "testRegex": "(.*|(\\.|/)(test|spec))\\.tsx?$",
//   "setupFilesAfterEnv": ['./jest.setup.js']
// };


module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  testTimeout: 10000,
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  }
};