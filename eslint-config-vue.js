'use strict';
const {lineIndent} = require('./utils');
// Variables
module.exports = {
  'parserOptions': {
    'parser': "babel-eslint",
    'ecmaVersion': 9,
    'sourceType': 'module',
    'ecmaFeatures': {
      'globalReturn': true,
      'impliedStrict': false,
      'jsx': true,
      'experimentalObjectRestSpread': false,
      'allowImportExportEverywhere': false
    }
  },
  'parser': 'vue-eslint-parser',
  'globals': {
    'process': false,
    'require': false
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  // ignore the plugin 'html', due to https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/60
  'plugins': ['vue'],
  'settings': {
    // 'html/html-extensions': ['.vue', '.html'],
    'import/resolver': {
       "node": {
        "extensions": [
            ".js",
            ".vue"
        ]
      },
      'webpack': {
        'config': 'build/webpack.dev.conf.js'
      }
    }
  },
  'rules': {
    'vue/max-attributes-per-line': ['error', {'singleline': 10, 'multiline': {'max': 5, 'allowFirstLine': true}}],
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/html-indent': ["error", lineIndent],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'ignorePackages': true,
      'pattern': {
        '.js': 'never',
        '.vue': 'never'
      }
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }]
  }
};
