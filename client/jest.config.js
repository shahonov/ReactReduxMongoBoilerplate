/* istanbul ignore file */

module.exports = {
    verbose: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    coverageDirectory: '../client-unit-test-coverage',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    moduleDirectories: [
        "node_modules",
        "src"
    ],
}