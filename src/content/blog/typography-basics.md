---
title: "网页排版基础：行高、行宽与字距"
description: "掌握中文阅读舒适度的三个抓手，让 B2 文章页更易读。"
pubDate: 2026-03-15
category: 美化
tags: ["排版", "可读性", "CSS"]
author: 大可
---
再好看的配色，排版不舒服也留不住读者。三个最影响中文阅读体验的参数：

## 行高（line-height）

中文正文建议 `1.7` 到 `1.9`：

```css
article p { line-height: 1.8; }
```

行高用无单位数值（相对于字体大小），方便子元素继承缩放。

## 行宽（measure）

一行 30–45 个汉字最舒适。用 `max-width` 限制：

```css
article { max-width: 42em; }
```

## 字距与段距

标题可加 `letter-spacing: 0.02em` 提升精致感；段落之间用 `margin-bottom` 而非空行。文章页两侧留白、首行不缩进（屏幕阅读习惯），整体会更干净。
