module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['.eslintrc.cjs'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports,
        project: 'tsconfig.json',
        files: ['*.ts', '*.tsx'],
    },
    rules: {
        semi: ['error', 'never'],
        'no-unused-vars': 1,
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
    },
}
