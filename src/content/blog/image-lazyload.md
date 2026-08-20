---
title: "图片懒加载：native lazy 与 IntersectionObserver"
description: "延迟加载首屏外图片，缩短首屏时间，附原生与 JS 两种方案。"
pubDate: 2026-05-10
category: 技术
tags: ["性能", "图片", "懒加载"]
author: 大可
---
B2 文章页图片多，全部首屏加载会拖慢速度。懒加载只加载可视区附近的图片。

## 原生方案（首选）

```html
<img src="/a.jpg" loading="lazy" alt="说明文字">
```

现代浏览器原生支持 `loading="lazy"`，零 JS、零依赖。再加 `width`/`height` 占位防布局抖动。

## JS 方案（需精细控制时）

```js
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.src = e.target.dataset.src;
      io.unobserve(e.target);
    }
  }
});
document.querySelectorAll('img[data-src]').forEach((img) => io.observe(img));
```

原生够用就别上 JS，简单更可靠。记得每张图都写 `alt`，兼顾可访问性与 SEO。
