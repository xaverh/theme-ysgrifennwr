module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard', 'eslint:recommended'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
}
