module.exports = {
    env: {
        browser: true, // Browser global variables
        es2021: true, // Adds all ECMAScript 2021 globals and sets parser's ecmaVersion to 12
        node: true, // Node.js global variables and Node.js scoping
        jest: true, // Jest global variables
    },
    extends: [
        "eslint:recommended", // ESLint's recommended rules
        "plugin:@typescript-eslint/recommended", // TypeScript specific recommended rules
    ],
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
    parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module", // Allows for the use of imports
    },
    plugins: [
        "@typescript-eslint", // Use TypeScript-specific linting rules
    ],
    rules: {
        // Error Prevention
        "no-console": ["warn"], // Warns when using console.log, etc. in production
        "no-debugger": ["error"], // Disallows debugger statements
        "no-alert": ["error"], // Disallows use of alert, confirm, and prompt
        "no-var": ["error"], // Requires let or const instead of var
        "prefer-const": ["error"], // Suggests const when a variable is never reassigned

        // Code Style
        indent: ["error", 4], // Enforce 4-space indentation
        quotes: ["error", "double"], // Enforce the use of double quotes
        semi: ["error", "always"], // Require semicolons at the end of statements
        "comma-dangle": ["error", "never"], // Disallow trailing commas
        "eol-last": ["error", "always"], // Require newline at the end of files
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }], // Limit consecutive empty lines

        // TypeScript Specific
        "@typescript-eslint/explicit-function-return-type": ["error"], // Require explicit return types on functions
        "@typescript-eslint/no-explicit-any": ["error"], // Disallow the use of the any type
        "@typescript-eslint/no-unused-vars": ["error"], // Disallow unused variables
        "@typescript-eslint/typedef": [
            "error",
            {
                // Require type definitions
                arrayDestructuring: false,
                arrowParameter: false,
                memberVariableDeclaration: true,
                objectDestructuring: false,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: true,
            },
        ],
        "@typescript-eslint/naming-convention": [
            // Enforce naming conventions
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
            {
                selector: "class",
                format: ["PascalCase"],
            },
        ],

        // Functional Programming
        "no-param-reassign": ["error"], // Disallow reassigning function parameters

        // Code Complexity
        "max-depth": ["error", 3], // Enforce a maximum nesting depth of blocks
        "max-lines-per-function": ["error", 50], // Limit the number of lines in a function
        complexity: ["error", 10], // Limit cyclomatic complexity
    },
};
