const _ = require('underscore');

module.exports = require('./eslint-config-vue-ts');

_.extendOwn(module.exports.parserOptions, {
  createDefaultProgram: true,
  useJSXTextNode: true,
  callback: _.noop
});
