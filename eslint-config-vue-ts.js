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
      if (script) {
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
      } else {
        options.createDefaultProgram = /\.js$/.test(options.filePath) ? true : undefined;
      }
    }
  },
  parser: 'vue-eslint-parser-stzhang'
});
module.exports.plugins.push('@typescript-eslint');
module.exports.extends.push('plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking');
_.extendOwn(module.exports.rules, {
  'minxing/arrow-parens': 'off',
  'require-atomic-updates': 'off',
  'import/extensions': ['error', {
    ts: 'never',
    js: 'never',
    vue: 'ignorePackages'
  }],
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  // 这几个规则：防止经由第三库 js api 把 any 类型变量引入开发者自己的业务代码里。
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  // 禁止字符串模板内出现表达式。
  '@typescript-eslint/restrict-template-expressions': 'off'
});
module.exports.settings['import/resolver'].node.extensions = [
  '.vue',
  '.macros.ts',
  '.ts',
  '.macros.js',
  '.js'
];
