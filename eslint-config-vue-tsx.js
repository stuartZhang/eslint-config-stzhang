const _ = require('underscore');

module.exports = require('./eslint-config-vue-ts');

_.defaults(module.exports.parserOptions, {
  ecmaFeatures: {}
});
_.extendOwn(module.exports.parserOptions, {
  createDefaultProgram: true,
  useJSXTextNode: true,
  callback: _.noop
});
_.extendOwn(module.exports.parserOptions.ecmaFeatures, {
  jsx: true
});
