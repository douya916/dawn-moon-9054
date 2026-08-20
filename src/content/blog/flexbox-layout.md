---
title: "Flexbox 核心布局实战"
description: "用弹性盒模型快速实现导航栏、卡片排列与垂直居中，告别 float 与 margin 技巧。"
pubDate: 2026-02-09
category: 技术
tags: ["CSS", "Flexbox", "布局"]
author: 大可
---
Flexbox 是现代布局的基石，特别适合一维排列（一行或一列）。它在 B2 子主题美化里用得极多。

## 三行搞定垂直居中

```css
.box {
  display: flex;
  align-items: center;     /* 交叉轴居中 */
  justify-content: center; /* 主轴居中 */
}
```

再也不是 `position + transform` 的 hack。

## 导航栏两端对齐

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## 等宽卡片流

```css
.grid { display: flex; flex-wrap: wrap; gap: 16px; }
.grid > .item { flex: 1 1 240px; }
```

`flex: 1 1 240px` 表示「可伸长、可收缩、基准 240px」，配合 `flex-wrap` 自动换行，响应式天然友好。
