const _ = require('underscore');
const vueLinterConf = require('./eslint-config-vue');

module.exports = _.extendOwn(vueLinterConf, {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    warnOnUnsupportedTypeScriptVersion: false,
    extraFileExtensions: ['.vue'],
    project: './tsconfig.json',
    tsconfigRootDir: './',
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'vue-eslint-parser-stzhang'
});
module.exports.rules['import/extensions'] = ['error', 'always', {
  ignorePackages: true,
  pattern: {
    ts: 'never',
    js: 'never'
  }
}];
