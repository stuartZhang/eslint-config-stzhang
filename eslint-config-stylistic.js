'use strict';
const {lineIndent} = require('./utils');
// Stylistic Issues
module.exports = {
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': false
    }],
    'camelcase': ['error', {
      'properties': 'never'
    }],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'that'],
    'eol-last': 'error',
    'func-names': 'off',
    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true
    }],
    'id-blacklist': 'off',
    'id-length': 'off',
    'indent': ['error', lineIndent, {
      'SwitchCase': 0,
      'VariableDeclarator': {
        'var': 1,
        'let': 1,
        'const': 1
      }
    }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true,
      'overrides': {}
    }],
    'new-cap': ['error', {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    // 'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      'maxBOF': 0,
      'max': 1,
      'maxEOF': 1
    }],
    'no-negated-condition': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-nested-ternary': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true
    }],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'sort-imports': 'off',
    'sort-vars': ['warn', {
      'ignoreCase': true
    }],
    'space-before-blocks': ['error', {
      'functions': 'never',
      'keywords': 'always',
      'classes': 'never'
    }],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {
      'int32Hint': false
    }],
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always', {
      'exceptions': ['!', '*'],
      'markers': ['TODO:', 'FIXME', 'XXX']
    }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always', {
      'considerPropertyDescriptor': true
    }],
    'function-paren-newline': ['error', 'consistent'],
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'never'],
    'max-depth': ['warn', 6],
    'max-len': 'off',
    'max-lines': ['warn', 600],
    'max-lines-per-function': ['warn', {
      'max': 100,
      'skipBlankLines': true,
      'skipComments': true,
      'IIFEs': false
    }],
    'max-nested-callbacks': ['warn', 10],
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': ['warn', {
      'max': 1
    }],
    'multiline-comment-style': ['warn', 'starred-block'],
    'multiline-ternary': ['warn', 'always-multiline'],
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-plusplus': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'nonblock-statement-body-position': ['error', 'below'],
    'object-curly-newline': ['warn', {
      'consistent': true
    }],
    'object-property-newline': ['warn', {
      'allowAllPropertiesOnSameLine': true
    }],
    'one-var': ['warn', {
      'initialized': 'never',
      'uninitialized': 'consecutive'
    }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-object-spread': 'error',
    'require-jsdoc': 'off',
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'switch-colon-spacing': ['warn', {
      'after': true,
      'before': false
    }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off'
  }
};
