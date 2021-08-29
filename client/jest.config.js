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
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70
        }
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    },
    moduleDirectories: [
        "node_modules",
        "src"
    ],
}