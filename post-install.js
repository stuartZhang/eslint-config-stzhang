const fs = require('fs-extra');
const path = require('path');
const co = require('co');
const pkg = require('./package.json');

const parentDir = path.join(__dirname, '..');

if (path.basename(parentDir) === 'node_modules') {
  Object.keys(pkg.dependencies).filter(name => /^eslint-plugin-/.test(name)).forEach(co.wrap(function *(name, i){
    const src = path.join(__dirname, 'node_modules', name);
    if (yield fs.pathExists(src)) {
      const dest = path.join(parentDir, name);
      if (yield fs.pathExists(dest)) {
        yield fs.remove(dest);
      }
      yield fs.move(src, dest);
      console.log(`${i + 1}. 安装 ESLint 插件依赖 ${name}`);
    }
  }));
}
