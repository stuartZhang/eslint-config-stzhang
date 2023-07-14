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
    'stzhang2/eslint-config-bestpractice.js',
    'stzhang2/eslint-config-errors.js',
    'stzhang2/eslint-config-es6.js',
    'stzhang2/eslint-config-node.js',
    'stzhang2/eslint-config-possibleerrors.js',
    'stzhang2/eslint-config-stylistic.js',
    'stzhang2/eslint-config-var.js'
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
