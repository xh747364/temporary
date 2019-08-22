---
title: "Vue 单元测试"
date: 2019-08-22 17:15:23
tags: 
	- Vue
	- 单元测试
---


>vue 单元测试  

<!-- more-->
## 安装依赖
```javascript
npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha
```
##### 在package.json层创建karma.conf.js (注意，是conf，不是config!!!) 内容如下

```javascript
var webpackConfig =  require('@vue/cli-service/webpack.config.js')
module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],
        files: [
            'tests/**/*.spec.js'   //tests目录下，所有.spce.js结尾的测试文件
        ],
        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['spec'],
        browsers: ['ChromeHeadless']
    })
}
```
package.json内增加script命令

```javascript
"test": "karma start"
```

##### 引入断言模块chai


##### 应用
```javascript
//tests/unit 下创建 HellpWorld.spec.js
import Vue from 'vue'
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("简单测试1 是否等于 true", () => {
    expect(1).to.equal(true);
  });
});

/******************其他用法*********************/
describe('异步测试Callback', function () {
  it('Done用例', function () {
    
  })
})

describe('异步测试Callback', function () {
  it('Done用例', function (done) {
    setTimeout(() => {
      done()
    }, 1000)
  })
})
 
// promise
describe('异步测试Promise', function () {
  it('Promise用例', function () {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  })
})
 
// async
describe('异步测试Async', function () {
  it('Async用例', async function () {
    return await Promise.resolve()
  })
})
```

> 最后执行 npm run test