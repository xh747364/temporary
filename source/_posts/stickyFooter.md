---
title: 粘贴页脚
date: 2019-11-05 14:36:27
update: 2019-11-05 14:36:27
categories:
- web前端
tags:
- flex布局
---

> 内容不足时，页脚固定在页面底部

<!-- more -->

HTML

```html
<body>
  <header>头部</header>
  <main>内容</main>
  <footer>页脚</footer>
</body>
```

CSS
```css
body{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
header{
  line-height: 100px;
  text-align: center;
  color: #ffff;
  background: #333;
}
main{
  flex: 1;
  text-align: center;
  
}
footer{
  line-height: 100px;
  text-align: center;
  color: #ffff;
  background: #333;
}
```

预览

![服务器开小差了-_-!](https://xhxiehuan.club/blog-photolist/photos/stickyFooter.png) 