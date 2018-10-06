'use strict';

const node8 = require('./eslint-config-node8x');

module.exports = Object.assign({}, node8, {
  rules: {
    'require-unicode-regexp': 'off',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'off',
    'no-param-reassign': 'off',
    'prefer-reflect': 'off',
    'array-bracket-newline': 'off'
  }
});
