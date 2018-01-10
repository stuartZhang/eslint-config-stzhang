'use strict';
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
    'indent': ['error', 4, {
      'SwitchCase': 0,
      'VariableDeclarator': {
        'var': 1,
        'let': 1,
        'const': 1.5
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
    'sort-imports': ['warn', {
      'ignoreCase': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
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
    }]
  }

};
