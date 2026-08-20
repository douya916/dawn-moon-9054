---
title: "内联 SVG 图标与 symbol sprite"
description: "用 SVG sprite 一次性注入图标，避免重复请求，颜色随 currentColor 变化。"
pubDate: 2026-05-17
category: 技术
tags: ["SVG", "图标", "性能"]
author: 大可
---
网站图标用图片会有额外请求、还不吃主题色。SVG 是更优解，尤其 symbol sprite 方案。

## 定义一次，随处引用

在页面放一个隐藏的 svg，内含多个 `<symbol>`：

```html
<svg style="display:none">
  <symbol id="i-star" viewBox="0 0 24 24">
    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
  </symbol>
</svg>
```

使用时：

```html
<svg><use href="#i-star"></use></svg>
```

## 颜色跟随文字

SVG 路径填 `fill="currentColor"`，图标就能随 CSS 的 `color` 变化，主题切换时自动适配，无需多套图。
B2 里的社交图标、分类图标都适合这么做。
