'use strict';

module.exports = {
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'module',
    'ecmaFeatures': {
      'globalReturn': true,
      'impliedStrict': false,
      'jsx': false,
      'experimentalObjectRestSpread': false
    }
  },
  'env': {
    'node': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'minxing/eslint-config-bestpractice.js',
    'minxing/eslint-config-errors.js',
    'minxing/eslint-config-es6.js',
    'minxing/eslint-config-node.js',
    'minxing/eslint-config-possibleerrors.js',
    'minxing/eslint-config-stylistic.js',
    'minxing/eslint-config-var.js'
  ],
  'rules': {
    'indent': ['error', 2, {
      'SwitchCase': 0,
      'VariableDeclarator': {
        'var': 2,
        'let': 2,
        'const': 3
      }
    }]
  },
  'parser': 'babel-eslint',
  'root': true
};
