---
title: "卡片悬停微交互"
description: "用阴影、位移与图标动效做有质感的卡片反馈，克制而不花哨。"
pubDate: 2026-05-03
category: 美化
tags: ["CSS", "微交互", "悬停"]
author: 大可
---
好的悬停反馈能暗示「可点击」，但过度动效会分散注意力。分享几组克制的做法。

## 上浮 + 阴影

```css
.card {
  transition: transform .2s ease, box-shadow .2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,.12);
}
```

轻微上移配柔和阴影，是最稳妥的「活」起来方式。

## 图标引导

卡片里的「阅读更多」箭头，悬停时右移一点：

```css
.more { transition: transform .2s; }
.card:hover .more { transform: translateX(4px); }
```

统一 `transition` 时长（如 .2s）、统一缓动（ease），全站动效才会协调。
