---
title: "Vue 单元测试"
date: 2019-08-22 17:15:23
updated: 2019-09-12 13:36:21
categories: 
- web前端
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
## 在package.json层创建karma.conf.js 内容如下



```javascript
│ app.ts
│ log.txt
│ package-lock.json
│ package.json
│ README.md
│ tsconfig.json
│ yarn.lock
│ 欢子.todo
│
├─assets
│ ├─css
│ │ app.9079194c.css
│ │
│ ├─img
│ │ logo.82b9c7a5.png
│ │
│ └─js
│ about.09af784e.js
│ about.09af784e.js.map
│ app.0c2971c9.js
│ app.0c2971c9.js.map
│ chunk-vendors.d6fd0893.js
│ chunk-vendors.d6fd0893.js.map
│
├─controllers
│ ApiController.ts
│ IndexController.ts
│



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

## 引入断言模块chai应用


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
> 完结撒花❀❀❀