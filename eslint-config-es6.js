'use strict';
// ECMAScript 6
const {noConsole} = require('./utils');
module.exports = {
  plugins: ['minxing'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    // 'constructor-super': ['error'],
    'generator-star-spacing': ['off'],
    // 'no-class-assign': ['error'],
    'no-confusing-arrow': ['error', {
      allowParens: false
    }],
    /* 'no-const-assign': ['error'],
       'no-dupe-class-members': ['error'],
       'no-new-symbol': ['error'],
       specify imports that you don’t want to use in your application. */
    'no-restricted-imports': 'off',
    /* 'no-this-before-super': ['error'],
       flags class constructors that can be safely removed without changing how the class works. */
    'no-useless-constructor': ['error'],
    // discouraging the use of var and encouraging the use of const or let instead. ecmaFeatures.blockBindings = true
    'no-var': ['error'],
    // enforces the use of the shorthand syntax. This applies to all methods (including generators) defined on object literals and any properties defined where the key name matches name of the assigned variable.
    'object-shorthand': ['error', 'always'],
    //  flag usage of function expressions in an argument list. this keywords in arrow functions bind to the upper scope’s.
    'prefer-arrow-callback': ['error'],
    // flag variables that are declared using let keyword, but never reassigned after the initial assignment.
    'prefer-const': ['error', {
      destructuring: 'all'
    }],
    // flag usage of any older method, suggesting to instead use the newer Reflect version.
    'prefer-reflect': ['error', {
      exceptions: [
        'getOwnPropertyNames'
      ]
    }],
    // flag usage of arguments variables.
    'prefer-rest-params': ['error'],
    // flag usage of Function.prototype.apply() that can be replaced with the spread operator.
    'prefer-spread': ['error'],
    //  flag usage of + operators with strings.
    'prefer-template': ['error'],
    // generates warnings for generator functions that do not have the yield keyword.
    'require-yield': ['off'],
    // maintain consistency around the spacing inside of template literals.
    'template-curly-spacing': ['error', 'never'],
    // enforces spacing around the * in yield* expressions.
    'yield-star-spacing': ['error', 'after'],
    // Connect rules
    'minxing/no-array-concat': ['error'],
    'minxing/no-string-charcode': ['error'],
    'minxing/no-util-format': ['error'],
    'minxing/arrow-parens': ['off'],
    'minxing/generator-star-spacing': ['error', 'before'],
    'minxing/require-yield': ['error'],
    'minxing/no-console': noConsole.value,
    'no-duplicate-imports': ['error'],
    'no-useless-rename': ['error'],
    'no-useless-computed-key': 'error',
    'prefer-destructuring': ['error', {
      array: true,
      object: true
    }, {
      enforceForRenamedProperties: false
    }],
    'prefer-numeric-literals': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error'
  }
};
