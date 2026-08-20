---
title: "暗色模式：自动 + 手动切换"
description: "基于 prefers-color-scheme 跟随系统，再用 CSS 变量与少量 JS 支持手动切换。"
pubDate: 2026-03-01
category: 技术
tags: ["CSS", "暗色模式", "主题"]
author: 大可
---
暗色模式不是简单反色，而是重新设计一套配色。核心思路是用 CSS 变量，再切换变量集。

## 跟随系统

```css
:root { --bg: #fff; --text: #111; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #0f172a; --text: #e2e8f0; }
}
```

不加任何 JS 就能跟随系统，但用户想手动切换时就不够了。

## 手动切换

在 `<html>` 上加 `data-theme="dark"` 类，用属性选择器覆盖变量：

```css
html[data-theme="dark"] {
  --bg: #0f172a; --text: #e2e8f0;
}
```

JS 切换属性并写入 `localStorage`，刷新后读取恢复。为避免刷新闪白，要在 `<head>` 提前内联一段读存储的脚本（防闪烁）。
