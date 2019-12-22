const _ = require('underscore');
const vueLinterConf = require('./eslint-config-vue');

module.exports = _.extendOwn(vueLinterConf, {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    warnOnUnsupportedTypeScriptVersion: false,
    extraFileExtensions: ['.vue'],
    project: './tsconfig.json',
    tsconfigRootDir: './',
    // noWatch: false,
    callback(script, options){
      const langAttr = script.startTag.attributes.find(a => typeof a.key === 'object' &&
          a.key.type === 'VIdentifier' && a.key.name === 'lang');
      if (langAttr && typeof langAttr.value === 'object' &&
          langAttr.value.type === 'VLiteral' && langAttr.value.value === 'tsx') {
        options.createDefaultProgram = options.useJSXTextNode = true;
        if (options.ecmaFeatures == null) {
          options.ecmaFeatures = {};
        }
        if (!options.ecmaFeatures.jsx) {
          options.ecmaFeatures.jsx = true;
        }
        options.filePath += `.${langAttr.value.value}`;
      } else {
        options.createDefaultProgram = options.useJSXTextNode = undefined;
        if (typeof options.ecmaFeatures === 'object' && options.ecmaFeatures.jsx) {
          options.ecmaFeatures.jsx = undefined;
        }
      }
    }
  },
  parser: 'vue-eslint-parser-stzhang'
});
module.exports.plugins.push('@typescript-eslint');
module.exports.extends.push('plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking');
_.extendOwn(module.exports.rules, {
  'import/extensions': ['error', 'always', {
    ts: 'never',
    js: 'never',
    vue: 'ignorePackages'
  }],
  '@typescript-eslint/camelcase': ['error', {
    properties: 'always',
    genericType: 'always',
    ignoreDestructuring: false,
    allow: ['left_1', 'left_2', 'right_1', 'right_2']
  }]
});
module.exports.settings['import/resolver'].node.extensions = [
  '.vue',
  '.macros.ts',
  '.ts',
  '.macros.js',
  '.js'
];
