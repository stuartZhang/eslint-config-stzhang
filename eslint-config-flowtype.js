'use strict';
// Facebook Flow
module.exports = {
  extends: [
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'flowtype'
  ],
  settings: {
    flowtype: {// flow.js 规则仅应用于 // @flow 文件。
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'flowtype/union-intersection-spacing': ['error', 'never']
  }
};
