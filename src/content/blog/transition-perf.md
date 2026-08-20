---
title: "过渡动画性能优化"
description: "只动 transform 与 opacity，避免触发重排重绘，让悬停动画丝滑不掉帧。"
pubDate: 2026-03-29
category: 技术
tags: ["性能", "动画", "CSS"]
author: 大可
---
给 B2 卡片加悬停放大很常见，但写法不对就会卡顿。关键：动画只碰 `transform` 和 `opacity`。

## 为什么

改 `width`、`top`、`margin` 会触发**重排（reflow）**，整页重新计算布局；改 `transform`/`opacity` 只走合成层，GPU 直接处理，几乎零成本。

```css
/* 推荐：用 transform 缩放 */
.card { transition: transform .25s ease; }
.card:hover { transform: scale(1.03); }

/* 避免：改 width/top 会重排 */
.card:hover { width: 110%; }
```

## 配合 will-change

频繁动画的元素可加 `will-change: transform` 提前提升为合成层，但**不要滥用**（见下篇），否则反而占内存。
