---
title: Ant design pro of vue 踩坑记录
date: 2019-08-30 22:02:28
modified: 2019-10-12 17:14:17
categories: 
- web前端
tags:
 - Vue
 - ant design
---

> 基于 Ant Design of Vue 实现的 Ant Design Vue Pro 版

<!-- more -->

- 官网 [https://pro.loacg.com](https://pro.loacg.com)
- Ant Design of Vue [https://www.antdv.com/docs/vue/introduce-cn/](https://www.antdv.com/docs/vue/introduce-cn/)

# 引入[echarts](https://www.echartsjs.com/zh/index.html)问题

## 按需引入

```
let echarts = require('echarts/lib/echarts')
// 引入折线图、柱形图、饼图、漏斗图，散点图
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/funnel')
require('echarts/lib/chart/scatter')
// 引入提示框和title组件，图例，地图
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/geo')
//图例翻译滚动
// require('echarts/lib/component/legendScroll')
//引入中国地图
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

Vue.prototype.$echarts = echarts
```

## ie浏览器第一次进入下不会缩放

```
let fireEvent =(element,event) => {  
  if (document.createEventObject){  
    // IE浏览器支持fireEvent方法  
    var evt = document.createEventObject();  
    return element.fireEvent('on'+event,evt)  
  }  
  else{  
    // 其他标准浏览器使用dispatchEvent方法  
    var evt = document.createEvent( 'HTMLEvents' );  
    evt.initEvent(event, true, true);  
    return !element.dispatchEvent(evt);  
  }  
}
setTimeout(() => {
  fireEvent(window,'resize');
  if (document.createEventObject){  
    // IE浏览器支持fireEvent方法  
    var evt = document.createEventObject();  
    window.fireEvent('onresize',evt)  
  }  
  else{  
    // 其他标准浏览器使用dispatchEvent方法  
    var evt = document.createEvent( 'HTMLEvents' );  
    evt.initEvent('resize', true, true);  
    window.dispatchEvent(evt);  
  }
}, 10)
```

## 把echarts封装为组件

1. 在 /src/components/Charts 下新建 EchartCom.vue 文件，内容如下，根据需求引入图表类型

```
<template>
  <div ref="chartDom"/>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option: {
      handler (val) {
        this.chart.hideLoading()
        this.chart.setOption(val)
      },
      deep: true
    }
  },
  mounted () {
    this.renderChart()
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.resize()
      }, 100)
    })
  },
  methods: {
    resize () {
      this.chart.resize()
    },
    renderChart () {
      // console.log(echarts)
      // console.log(this.option, '===================')
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom)
      this.chart.showLoading()
      this.chart.setOption(this.option)
    }
  }
}
</script>
```

2. 修改 /src/components/index.js 

```
// 新增
import EchartCom from '@/components/Charts/EchartCom'

export {
  ...
  EchartCom
}
```

3. 引用该组件

```
// html
<EchartCom class="chartLine" :option="option"></EchartCom>

// script
import { EchartCom } from '@/components'

export default {
  components: {
    EchartCom
  },
  data () {
    return {
      option: {}
    }
  }
}

// style
.chartLine{
  width: 600px;
  height: 300px;
}
```

# 代理会自动加上 /api 问题

1. 修改 /src/utils/request.js

```
// 注释掉默认的代理
const service = axios.create({
  // baseURL: '/api', 
  timeout: 0 // 请求超时时间
})
```

2. 然后在去vue.config.js中添加代理即可

```
devServer: {
  port: 8000,
  proxy: {
    '/test': {
      target: 'http://192.168.3.1:8080/',
      ws: false,
      changeOrigin: true,
      pathRewrite: {
        '^/test': ''
      }
    }
  }
}
```

# 打包后文件过大

## 关掉报错信息

```
// vue.config.js 中
productionSourceMap: false
```

## 开启gzip压缩

安装 compression-webpack-plugin
```
npm install --save-dev compression-webpack-plugin
```
修改 vue.config.js
```
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

...
configureWebpack: {
  plugins: [
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
```