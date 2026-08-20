---
title: "平滑滚动与自动生成文章目录"
description: "给长文加 TOC 侧边栏，点击平滑跳转并高亮当前章节。"
pubDate: 2026-05-24
category: 技术
tags: ["JS", "TOC", "交互"]
author: 大可
---
技术长文没有目录很难读。给 B2 文章页加一个自动 TOC，体验立刻专业。

## 平滑滚动

```css
html { scroll-behavior: smooth; }
/* 给锚点留吸顶导航的余量 */
:target { scroll-margin-top: 80px; }
```

## 生成目录

文章渲染后，用 JS 抓取所有 `h2/h3` 生成列表：

```js
const heads = [...document.querySelectorAll('article h2, article h3')];
const toc = heads.map((h) => {
  h.id = h.id || h.textContent.trim();
  return `<a href="#${h.id}">${h.textContent}</a>`;
}).join('');
document.querySelector('#toc').innerHTML = toc;
```

## 高亮当前章节

配合 `IntersectionObserver` 监听标题进入视口，给对应目录项加 `active` 类即可。注意锚点要设 `scroll-margin-top`，否则被吸顶导航挡住。
