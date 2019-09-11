module.exports = {
  globals: {
    'ts-jest': { tsConfig: 'tsconfig.json' }
  },
  moduleFileExtensions: [ 'ts', 'js' ],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testMatch: [ '**/src/**/*.test.ts' ],
  coverageThreshold: {
    global: {
      //branches: 80,
      functions: 75,
      lines: 80,
      statements: 80
    }
  },
  coverageReporters: [
    "text",
    "cobertura"
  ]
};
