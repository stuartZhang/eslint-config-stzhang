// Possible Errors
module.exports = {
  'rules': {
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', {
      'allow': ['assert', 'error', 'time', 'timeEnd']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  }
};
