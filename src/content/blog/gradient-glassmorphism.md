---
title: "渐变背景与玻璃拟态"
description: "用线性/径向渐变营造氛围，配合 backdrop-filter 做出通透的玻璃卡片。"
pubDate: 2026-02-23
category: 美化
tags: ["CSS", "渐变", "玻璃拟态"]
author: 大可
---
渐变和玻璃拟态（Glassmorphism）是当下网站美化的热门元素，用在 B2 的卡片、头部非常出彩。

## 渐变背景

```css
.hero {
  background: linear-gradient(135deg, #6366f1, #ec4899);
}
.blob {
  background: radial-gradient(circle at 30% 30%, #f472b6, #6366f1);
}
```

`135deg` 控制方向，多个色标可做多彩渐变。

## 玻璃卡片

```css
.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
}
```

玻璃效果依赖 `backdrop-filter`，需要元素背后有内容才看得出模糊。注意它会吃性能，滚动列表里慎用（见性能篇）。
