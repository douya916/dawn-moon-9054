---
title: "美化 B2 文章卡片的实战思路"
description: "从封面比例、信息层级到悬停动效，系统改造 B2 列表卡片。"
pubDate: 2026-08-16
category: 美化
tags: ["B2主题", "卡片", "美化"]
author: 大可
---
列表卡片是 B2 首页的门面。系统美化，而不是东改一点西改一点。

## 1. 统一封面比例

不同图尺寸导致卡片高低不齐。固定比例避免错位：

```css
.post-card .thumb {
  aspect-ratio: 16 / 10;
  object-fit: cover;
}
```

## 2. 信息层级

标题 > 摘要 > 元信息（日期/分类）。用字重和颜色拉开差距：标题 `font-weight:600`，元信息用 `--gray-500` 小一号。

## 3. 克制的动效

```css
.post-card { transition: transform .2s, box-shadow .2s; }
.post-card:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0,0,0,.08); }
```

## 4. 圆角与留白
卡片圆角 12–16px，内边距统一，整体更透气。改完记得在多尺寸下预览，确认不错位。
