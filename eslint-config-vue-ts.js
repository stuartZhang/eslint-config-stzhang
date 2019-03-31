const _ = require('underscore');
const vueLinterConf = require('./eslint-config-vue');

module.exports = _.extendOwn(vueLinterConf, {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: './tsconfig.json',
    tsconfigRootDir: '../../',
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true
    }
  }
});
