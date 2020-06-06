'use strict';

module.exports = require('./eslint-config-node8x');

Object.assign(module.exports.rules, {
    'require-unicode-regexp': 'off',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'off',
    'no-param-reassign': 'off',
    'prefer-reflect': 'off',
    'array-bracket-newline': 'off'
});
