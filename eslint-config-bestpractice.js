'use strict';
// Best Practices
module.exports = {
  'rules': {
    'accessor-pairs': ['warn', {
      'setWithoutGet': true,
      'getWithoutSet': false
    }],
    'block-scoped-var': ['warn'],
    'complexity': ['warn', {
      'maximum': 20
    }],
    'curly': ['warn', 'all'],
    'array-callback-return': ['error'],
    'consistent-return': ['error'],
    'default-case': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    // 'no-case-declarations': ['error'],
    'no-div-regex': ['warn'],
    'no-else-return': ['error'],
    'no-empty-function': ['error', {
      'allow': ['constructors']
    }],
    // 'no-empty-pattern': ['error'],
    'no-eq-null': 'off',
    'no-eval': ['error', {
      'allowIndirect': true
    }],
    'no-extend-native': 'off',
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    // 'no-fallthrough': ['error'],
    'no-floating-decimal': 'off',
    'no-implicit-globals': ['warn'],
    'no-implicit-coercion': 'off',
    'no-implied-eval': ['error'],
    'no-invalid-this': 'off',
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': 'off',
    'no-multi-spaces': ['error'],
    'no-multi-str': 'off',
    'no-native-reassign': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    // 'no-octal': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error', {
      'builtinGlobals': true
    }],
    'no-script-url': ['error'],
    // 'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': false
    }],
    // 'no-unused-labels': ['error'],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['warn', {
      'terms': ['todo', 'fixme', 'xxx'],
      'location': 'anywhere'
    }],
    'no-with': ['error'],
    'radix': ['error', 'as-needed'],
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside'],
    'yoda': ['error', 'never', {
      'exceptRange': true
    }]
  }
};
