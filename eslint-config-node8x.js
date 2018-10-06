'use strict';

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: false,
      jsx: false,
      experimentalObjectRestSpread: false
    }
  },
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'minxing/eslint-config-bestpractice.js',
    'minxing/eslint-config-errors.js',
    'minxing/eslint-config-es6.js',
    'minxing/eslint-config-node.js',
    'minxing/eslint-config-possibleerrors.js',
    'minxing/eslint-config-stylistic.js',
    'minxing/eslint-config-var.js'
  ]
};
