const _ = require('underscore');

module.exports = require('./eslint-config-vue-ts');

_.extendOwn(module.exports.parserOptions, {
  useJSXTextNode: true
});
_.extendOwn(module.exports.parserOptions.ecmaFeatures, {
  jsx: true
});
