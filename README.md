# eslint-config-minxing

【敏行H5程序】与【敏行node程序】`JavaScript`开发规则定制套装，支持`Vue`。

## 安装

`npm i eslint-config-minxing -D`

### `peers`依赖

* eslint: 5.6+

### 项目根目录下的`.eslintrc.js`配置

> 针对`webpack`可编程配置的`node`程序。

```javascript
module.exports = {
  ...
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'module',
    'ecmaFeatures': {
      'globalReturn': true,
      'impliedStrict': false,
      'jsx': false,
      'experimentalObjectRestSpread': false
    }
  },
  'extends': [
    'eslint:recommended',
    'minxing/eslint-config-bestpractice.js',
    'minxing/eslint-config-errors.js',
    'minxing/eslint-config-es6.js',
    'minxing/eslint-config-node.js',
    'minxing/eslint-config-possibleerrors.js',
    'minxing/eslint-config-stylistic.js',
    'minxing/eslint-config-var.js'
  ],
  ...
};
```

### `src`目录下的`.eslintrc.js`配置

> 重点针对`*.vue`程序。

```javascript
module.exports = {
  ...
  'root': true,
  'extends': [
    'eslint:recommended',
    'minxing/eslint-config-vue.js',
    'minxing/eslint-config-bestpractice.js',
    'minxing/eslint-config-errors.js',
    'minxing/eslint-config-es6.js',
    'minxing/eslint-config-node.js',
    'minxing/eslint-config-possibleerrors.js',
    'minxing/eslint-config-stylistic.js',
    'minxing/eslint-config-var.js'
  ],
  ...
};
```

## 手动执行`eslint`

`npm i npx -g`

`npx eslint **/*.* --fix`
