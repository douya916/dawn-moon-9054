---
title: "position: sticky 实现吸顶导航"
description: "用 sticky 让导航在滚动时吸附顶部，比 fixed 更少破坏布局。"
pubDate: 2026-04-12
category: 技术
tags: ["CSS", "sticky", "导航"]
author: 大可
---
吸顶导航提升跳转效率。过去用 `position: fixed`，但要手动处理占位、z-index。`sticky` 更优雅。

## 基本用法

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(8px);
}
```

元素在到达 `top: 0` 前正常流动，到达后「粘」在顶部，离开父容器又自动松开——比 fixed 少很多副作用。

## 常见失效原因

1. 祖先元素设了 `overflow: hidden/auto`，会截断 sticky 范围；
2. 父容器高度不够，元素没空间「粘」；
3. 忘记 `top` 值，sticky 不生效。
检查祖先的 overflow 是排错第一步。
