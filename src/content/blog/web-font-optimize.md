---
title: "网页字体优化与 font-display"
description: "用 font-display 控制文字闪动，配合 preload 与系统字体回退提速中文站点。"
pubDate: 2026-03-08
category: 技术
tags: ["性能", "字体", "Web Font"]
author: 大可
---
自定义字体能提升质感，但加载不当会造成 FOIT（文字 invisible）或布局抖动。

## font-display 行为

```css
@font-face {
  font-family: "MyFont";
  src: url("/fonts/my.woff2") format("woff2");
  font-display: swap;
}
```

`swap`：先显示系统字体，字体到位再替换，文字始终可见。`block` 会留白等待，体验更差。中文站点强烈建议 `swap`。

## 给中文站的建议

中文 web font 体积巨大，尽量不要整包引入。优先用系统字体栈：

```css
body {
  font-family: "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}
```

只对标题等少量文字用自定义字体，并用 `<link rel="preload">` 提前加载关键字体。
