module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
    jasmine: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
  }
}
