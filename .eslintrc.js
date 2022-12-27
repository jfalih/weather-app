module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'detox'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  rules: {
    'max-lines': ['warn', {max: 500, skipBlankLines: true, skipComments: true}],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    'no-restricted-imports': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    /**
     * fix enum already declared error
     * @link https://github.com/typescript-eslint/typescript-eslint/issues/2483#issuecomment-687095358
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
