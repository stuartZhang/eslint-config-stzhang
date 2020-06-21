# eslint-config-minxing

【敏行H5程序】与【敏行node程序】`JavaScript`开发规则定制套装，支持`Vue`。

## 安装

`npm i eslint-config-minxing -D`

### `peers`依赖

* eslint: 7.3.0+

### 项目根目录下的`.eslintrc.js`配置

> 针对`webpack`可编程配置的`node`程序。

#### nodejs 7.x

```javascript
module.exports = {
  ...
  'extends': [
    'minxing/eslint-config-node7x.js'
  ],
  ...
};
```

#### nodejs 8.x 或更高

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

#### `javascript` 与 `vue` 规则集

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

#### `typescript` 与 `vue` 规则集

```javascript
module.exports = {
  ...
  'root': true,
  'extends': [
    'minxing/eslint-config-vue-ts.js'
  ],
  ...
};
```

## 手动执行`eslint`

`npm i npx -g`

`npx eslint **/*.* --fix`
