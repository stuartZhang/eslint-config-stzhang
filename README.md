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
  'extends': [
    'minxing/eslint-config-node7x.js'
  ],
  ...
};
```

或

```javascript
module.exports = {
  ...
  'extends': [
    'minxing/eslint-config-node8x.js'
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
    'minxing/eslint-config-vue.js'
  ],
  ...
};
```

## 手动执行`eslint`

`npm i npx -g`

`npx eslint **/*.* --fix`
