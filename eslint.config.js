module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // To account for Node.js environments if necessary
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Ignoring the dist folder and any old eslintrc files
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the version of React
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh', // Ensure this is installed and configured properly
  ],
  rules: {
    'react/jsx-no-target-blank': 'off', // Disables warnings for target="_blank" without rel="noopener noreferrer"
    'react-refresh/only-export-components': [
      'warn', // Warns when exporting components incorrectly in React Refresh
      { allowConstantExport: true }, // Allows constant exports
    ],
    'react/prop-types': 'off', // Disables prop-types validation (useful for TypeScript or modern JS)
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warns for unused variables except those prefixed with "_"
  },
}
