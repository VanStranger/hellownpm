# hellownpm
say a word writed "hello world"  to npm . 
thanks to https://github.com/geneking/npm-develop.
## 一、注册npm账号
* 怎么将代码提到github，大家都知道需要一个github账号
* 同样，开发一个npm包，当然也需要一个npm账号，将npm包发布到npm的托管服务器
* 注册地址：[http://npmjs.org](http://npmjs.org)
* 该实例包含了模块的局部调用和全局调用两种方式

## 二、开发npm包
###1.项目构建
* npm init
* npm install babel-core babel-loader babel-preset-es2015 --save-dev
* 配置webpack.config.js文件
```javascript
var path = require('path');
module.exports = {
  entry: "./test/index.js",
  output: {
    path: __dirname+"/test",
    filename: "indexjs.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
```
###2.代码编写
* 入口index.js文件
非全局安装(npm install xxx)，则所有的函数接口都通过index.js暴露给外部调用
```javascript
import helloworld from "./src/helloworld.js";
exports.hello = helloworld;
```
* src文件夹
```javascript
const helloworld = function(world){
    console.log('Hello , '+world+'!');
};
export default helloworld;
```
* test文件夹
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<script src="./indexjs.js"></script>
```
```javascript
import {hello} from "../index.js";
hello("l");
```
###3.代码测试
* 执行命令webpack
* 打开test文件夹下的index.html

## 三、发布npm包
### 1.npm login
```bash
npm login
```
### 2.npm publish
```bash
npm publish
```

