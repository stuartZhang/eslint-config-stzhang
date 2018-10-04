// Possible Errors
const {noConsole, noDebugger} = require('./utils');
module.exports = {
  'rules': {
    'no-async-promise-executor': 'warn',
    'no-misleading-character-class': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
    'no-console': noConsole.value,
    'no-debugger': noDebugger.value // allow debugger during development
  }
};
