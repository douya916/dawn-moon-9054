---
title: "首页首屏加载优化清单"
description: "给 B2 首页做体检：字体、图片、脚本、缓存逐项提速。"
pubDate: 2026-06-14
category: 技术
tags: ["性能", "优化清单", "首页"]
author: 大可
---
首页是门面，也是性能重灾区。照这份清单逐项排查，基本能压到 2 秒内。

## 图片
- 首屏大图用 WebP/AVIF，并 `preload`；
- 列表缩略图 `loading="lazy"` + 固定宽高防抖动；
- 用响应式 `srcset` 给小屏更小的图。

## 字体
- 中文用系统字体栈，自定义字体只给标题；
- 开启 `font-display: swap`。

## 脚本与样式
- 第三方脚本（统计、评论）`defer` 或延迟到 `onload`；
- 首屏关键 CSS 内联，其余异步加载。

## 缓存
```http
Cache-Control: public, max-age=31536000, immutable
```
静态资源加长期缓存，配合文件名指纹更新。

最后用 Lighthouse 跑分验证，别凭感觉。
