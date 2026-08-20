---
title: "关键渲染路径与首屏优化"
description: "理清浏览器渲染流程，针对性削减阻塞资源，加快首次内容绘制。"
pubDate: 2026-06-07
category: 技术
tags: ["性能", "CRP", "优化"]
author: 大可
---
首屏慢，本质是「关键渲染路径（CRP）」上被阻塞。理解它才能对症优化。

## 渲染流程

HTML → 构建 DOM → CSSOM → 渲染树 → 布局 → 绘制。其中 CSS 和同步 JS 会阻塞渲染。

## 优化要点

1. **CSS 放 head、尽早下载**：但避免一个巨大的全站 CSS，可拆分首屏关键 CSS 内联。
2. **JS 加 defer / async**：非必要脚本不要阻塞解析。
3. **减少关键资源数量与体积**：合并、压缩、删无用代码。
4. **图片用现代格式**：WebP/AVIF 体积更小。

```html
<script src="app.js" defer></script>
<link rel="preload" href="hero.avif" as="image">
```

衡量指标看 LCP（最大内容绘制）与 FCP（首次内容绘制），目标是 LCP < 2.5s。
