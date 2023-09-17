module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'jsx-filename-extension': 'off',
    'react/jsx-filename-extension': 'off',
    'react/state-in-constructor': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'keyword-spacing': 'off',
    'class-methods-use-this': 'off',
    'react/no-unused-state': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
  },
};
