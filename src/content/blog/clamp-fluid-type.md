---
title: "用 clamp() 实现流式排版"
description: "一行代码让字号随视口平滑缩放，替代多段媒体查询。"
pubDate: 2026-03-22
category: 技术
tags: ["CSS", "响应式", "clamp"]
author: 大可
---
过去想让标题随屏幕变大，要写一堆 `@media`。`clamp()` 一行搞定。

## 语法

```css
h1 {
  font-size: clamp(1.5rem, 1rem + 2vw, 3rem);
}
```

含义：最小值 1.5rem，理想值 `1rem + 2vw`（随视口变化），最大值 3rem。浏览器在三者间取「夹在中间」的值。

## 还能用在哪

间距、内边距同样适用：

```css
.section { padding: clamp(24px, 5vw, 64px); }
```

这样大屏更舒展、小屏不拥挤，还省掉多处断点。注意 `clamp` 内部运算必须带单位（如 `2vw`），纯数字无法参与视口计算。
