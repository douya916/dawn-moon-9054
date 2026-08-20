---
title: "自定义滚动条样式"
description: "用 ::-webkit-scrollbar 与 scrollbar-color 美化滚动条，呼应站点配色。"
pubDate: 2026-04-26
category: 美化
tags: ["CSS", "滚动条", "美化"]
author: 大可
---
默认滚动条常和精心设计的配色格格不入。稍微美化能提升整体精致感。

## WebKit 系（Chrome/Edge/Safari）

```css
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb {
  background: #c7d2fe;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover { background: #a5b4fc; }
```

## 标准属性（Firefox）

```css
html {
  scrollbar-color: #c7d2fe #f1f5f9;
  scrollbar-width: thin;
}
```

注意：WebKit 伪元素不支持 Firefox，所以两套都写才能全浏览器覆盖。颜色取自你的主题变量，保持统一。
