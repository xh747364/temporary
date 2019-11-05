---
title: 一些判断函数
date: 2019-07-04 17:46:51
update: 2019-07-4 17:48:13
categories: 
- JavaScript工具函数
tags:
- 工具
- JavaScript
- 正则验证
---

> 各种判断函数

<!-- more -->


```javascript
// 合法数字
let isNumber = (num) => /^[0-9]+.?[0-9]*/g.test(num)

// 手机号
let isPhone = (num) => /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(num)

// 邮箱
let isEmail = (email) => /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)

// 身份证号
let isCardNo = (card) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(card)

// 微信浏览器
let isWeChat = () => /MicroMessenger/i.test(navigator.userAgent)

// 微信开发者工具
let isWeChatDevTool = () => isWeChat() && /wechatdevtools/i.test(navigator.userAgent)

//支付宝浏览器
let isAliPay = () => /AlipayClient/i.test(navigator.userAgent)

// 移动端
let isMobile = () => /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
```