const _ = require('underscore');

module.exports = require('./eslint-config-vue-ts');

_.defaults(module.exports.parserOptions, {
  ecmaFeatures: {}
});
_.extendOwn(module.exports.parserOptions, {
  createDefaultProgram: true,
  useJSXTextNode: true,
  callback(script, options){
    if (script) {
      const langAttr = script.startTag.attributes.find(a => typeof a.key === 'object' &&
          a.key.type === 'VIdentifier' && a.key.name === 'lang');
      if (langAttr && typeof langAttr.value === 'object' &&
          langAttr.value.type === 'VLiteral' && langAttr.value.value === 'tsx') {
          options.filePath += `.${langAttr.value.value}`;
      }
    }
  }
});
_.extendOwn(module.exports.parserOptions.ecmaFeatures, {
  jsx: true
});
