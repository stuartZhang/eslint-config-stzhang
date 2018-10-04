// Possible Errors
const {noConsole, noDebugger} = require('./utils');
module.exports = {
  'rules': {
    'no-console': noConsole.value,
    'no-debugger': noDebugger.value // allow debugger during development
  }
};
