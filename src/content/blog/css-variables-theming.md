---
title: "用 CSS 变量统一管理主题色"
description: "通过 :root 自定义属性集中管理颜色、间距与圆角，改一处全局生效。"
pubDate: 2026-01-22
category: 技术
tags: ["CSS", "变量", "主题"]
author: 大可
---
在 B2 子主题里hardcode颜色值，改配色要全文替换、极易漏改。用 CSS 自定义属性（变量）集中管理才是正解。

## 定义与使用

```css
:root {
  --color-primary: #6366f1;
  --color-bg: #ffffff;
  --radius: 12px;
  --space: 16px;
}

.btn {
  background: var(--color-primary);
  border-radius: var(--radius);
  padding: var(--space);
}
```

`:root` 上的变量全局可用，`var()` 取值。要换肤，只改 `:root` 一处。

## 配合暗色模式

在暗色媒体查询里重定义变量即可，无需重写每条规则：

```css
@media (prefers-color-scheme: dark) {
  :root { --color-bg: #0f172a; --color-primary: #818cf8; }
}
```

小贴士：变量还能用 `calc()` 组合，比如 `var(--space) * 2`，让间距体系更有规律。
