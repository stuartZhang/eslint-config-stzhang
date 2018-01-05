'use strict';
// Nodejs
module.exports = {
  'rules': {
    // ensuring that callbacks used outside of the main function block are always part-of
    // or immediately preceding a return statement. This rules decides what is a callback
    // based on the name of the function being called.
    'callback-return': ['error', ['callback', 'cb', 'next', 'done']],
    // all calls to require() to be at the top level of the module
    'global-require': 'off',
    // when you’re using the callback pattern in Node.js you’ll handle the error and requires
    // that you specify the name of your error object. The name of the argument will default
    // to err.
    'handle-callback-err': ['error', '^(?:err|error)$'],
    'no-mixed-requires': ['error', {
      'grouping': true,
      'allowCall': false
    }],
    'no-new-require': 'error',
    'no-path-concat': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'error'
  }
};
