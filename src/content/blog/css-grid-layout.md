---
title: "CSS Grid 网格布局实战"
description: "用二维网格做杂志式排版与自适应列数，复杂布局比 Flex 更直观。"
pubDate: 2026-02-16
category: 技术
tags: ["CSS", "Grid", "布局"]
author: 大可
---
Flexbox 擅长一维，Grid 擅长二维（同时控制行与列）。做文章列表、相册墙首选 Grid。

## 自适应列数

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
```

`auto-fill` + `minmax` 让浏览器按容器宽度自动决定放几列，容器变窄自动减列，无需媒体查询。

## 跨行跨列的杂志布局

```css
.feature { grid-column: span 2; grid-row: span 2; }
```

让某张卡片占两行两列成为视觉焦点，其余按格子填充，轻松做出杂志感首页。

Grid 还有 `fr` 单位表示「剩余空间比例」，`1fr 2fr` 即 1:2 分栏，比百分比更好算。
