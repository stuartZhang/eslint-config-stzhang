# eslint-config-minxing

【敏行H5程序】与【敏行node程序】开发`JavaScript`规则，支持`Vue`。

## 安装

`npm i eslint-config-minxing -D`

## 配置

### node &gt; .eslintrc.js

```javascript
module.exports = {
  ...
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

### VUE &gt; .eslintrc.js

```javascript
module.exports = {
  ...
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
