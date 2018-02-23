'use strict';
const {lineIndent} = require('./utils');
// Variables
module.exports = {
  'parser': 'vue-eslint-parser',
  'extends': [
    'plugin:vue/strongly-recommended'
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  // ignore the plugin 'html', due to https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/60
  'plugins': ['import', 'vue'],
  'settings': {
    // 'html/html-extensions': ['.vue', '.html'],
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  'rules': {
    'vue/max-attributes-per-line': ['error', {'singleline': 10, 'multiline': 5}],
    'vue/html-indent': ["error", lineIndent],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'ignorePackages': true,
      'pattern': {
          'js': 'never',
          'vue': 'never'
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
