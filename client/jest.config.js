/* istanbul ignore file */

module.exports = {
    verbose: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    setupFilesAfterEnv: [
        './src/setupTests.js'
    ],
    coverageDirectory: '../client-unit-test-coverage',
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60
        }
    },
    moduleDirectories: [
        "node_modules",
        "src"
    ],
}