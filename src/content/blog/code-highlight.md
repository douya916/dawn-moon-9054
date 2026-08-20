---
title: "代码块语法高亮"
description: "用 highlight.js / Prism 给文章代码上色，并适配暗色主题。"
pubDate: 2026-05-31
category: 技术
tags: ["代码高亮", "highlight.js", "美化"]
author: 大可
---
技术博客少不了代码，纯黑底白字可读性差。语法高亮能区分关键字、字符串、注释。

## 引入 highlight.js

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js/styles/github.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js/lib/common.min.js"></script>
<script>hljs.highlightAll();</script>
```

然后给代码块加 `class="language-css"` 即可。

## 适配暗色

高亮主题分亮色（github）和暗色（github-dark）。用 CSS 变量或站点主题切换时同步换样式表：

```js
function setTheme(t) {
  document.getElementById('hljs').href =
    t === 'dark' ? 'github-dark.min.css' : 'github.min.css';
}
```

若用 Astro/Markdown，也可在构建期直接高亮，避免运行期抖动。
