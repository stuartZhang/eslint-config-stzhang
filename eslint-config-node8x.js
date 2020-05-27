'use strict';
const {lineIndent} = require('./utils');
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
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
  ],
  rules: {
    'require-atomic-updates': 'off',
    // 临时绕过新版本 eslint 报的空指针异常。
    'template-curly-spacing': 'off',
    'indent': ['error', lineIndent, {
      SwitchCase: 0,
      ignoredNodes: ['TemplateLiteral'],
      VariableDeclarator: {
        var: 1,
        let: 1,
        const: 1
      }
    }]
  }
};
