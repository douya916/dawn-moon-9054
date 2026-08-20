---
title: "移动优先的响应式断点设计"
description: "从手机样式往上叠加，用最少断点覆盖大屏，避免样式冲突。"
pubDate: 2026-04-19
category: 技术
tags: ["响应式", "CSS", "移动端"]
author: 大可
---
B2 主题要在手机、平板、大屏都好看，断点设计很关键。推荐**移动优先**（mobile-first）。

## 移动优先写法

先写手机默认样式，再用 `min-width` 向上增强：

```css
.container { padding: 16px; }          /* 手机 */
@media (min-width: 768px) {
  .container { padding: 24px; }        /* 平板起 */
}
@media (min-width: 1024px) {
  .container { max-width: 1100px; margin: 0 auto; }
}
```

这样小屏只加载必要样式，覆盖关系清晰。

## 断点建议

不必照搬 Bootstrap 的 5 档。常用三档足够：640（手机横屏）、768（平板）、1024（桌面）。优先用 `clamp()`、Grid 的 `auto-fill` 等流式方案，减少断点数量。
