'use strict';

module.exports = {
  'extends': [
    'minxing/eslint-config-node7x.js'
  ],
  'rules': {
    'no-console': 'off',
    'indent': ['error', 2, {
      'SwitchCase': 0,
      'VariableDeclarator': {
        'var': 2,
        'let': 2,
        'const': 3
      }
    }]
  }
};
