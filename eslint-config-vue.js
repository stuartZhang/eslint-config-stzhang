'use strict';
const {lineIndent} = require('./utils');
// Variables
module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: false,
      jsx: true,
      experimentalObjectRestSpread: false,
      allowImportExportEverywhere: false
    }
  },
  parser: 'vue-eslint-parser',
  globals: {
    process: false,
    require: false
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'minxing/eslint-config-bestpractice.js',
    'minxing/eslint-config-errors.js',
    'minxing/eslint-config-es6.js',
    'minxing/eslint-config-node.js',
    'minxing/eslint-config-possibleerrors.js',
    'minxing/eslint-config-stylistic.js',
    'minxing/eslint-config-var.js'
  ],
  env: {
    browser: true,
    es6: true
  },
  // ignore the plugin 'html', due to https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/60
  plugins: ['vue'],
  settings: {
    // 'html/html-extensions': ['.vue', '.html'],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.vue'
        ]
      },
      webpack: {
        config: 'build/webpack.dev.conf.js'
      }
    },
    'polyfills': [ // 添加 polyfill，请参考 https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills
      'promises'
    ]
  },
  rules: {
    'compat/compat': 'warn',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-indent': ['error', lineIndent],
    'vue/max-attributes-per-line': ['error', {
      singleline: 10,
      multiline: {
        max: 5,
        allowFirstLine: true
      }
    }],
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      ignorePackages: true,
      pattern: {
        js: 'never',
        vue: 'never'
      }
    }],
    /*
       disallow reassignment of function parameters
       disallow parameter object manipulation except for specific exclusions
       allow optionalDependencies
     */
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }]
  }
};
