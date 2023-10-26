module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@factories": "<rootDir>/src/_utils/factories",
    "@interfaces": "<rootDir>/src/_utils/interfaces",
    "@singletons": "<rootDir>/src/_utils/singletons",
    "@validators": "<rootDir>/src/_application/validators",
    "@utils/(.*)": "<rootDir>/src/_utils/$1",
    "src/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
