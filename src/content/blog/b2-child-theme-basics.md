---
title: "B2 主题子主题创建与目录结构"
description: "从零开始为 B2 主题建立子主题，理清目录结构与样式加载顺序，避免直接改父主题。"
pubDate: 2026-01-08
category: 美化
tags: ["B2主题", "子主题", "WordPress"]
author: 大可
---
直接修改 B2 父主题文件，一旦主题更新所有改动都会被覆盖。正确的做法永远是建一个**子主题**，只覆盖你想改的部分。

## 子主题最少需要两个文件

在主题目录 `wp-content/themes/` 下新建文件夹，例如 `b2-child/`，放入：

```text
b2-child/
├── style.css      # 必须，含头部声明
└── functions.php  # 推荐，用来加载父主题样式
```

`style.css` 头部必须声明父主题：

```css
/*
 Theme Name:   B2 子主题
 Template:     b2
 Version:      1.0.0
*/
```

`Template` 填父主题目录名（小写），WordPress 据此建立继承关系。

## 然后是 functions.php

在子主题里引入父主题样式，否则页面会丢失全部 B2 样式。具体写法下一篇展开。

建好后在后台「外观 → 主题」启用子主题，原内容、设置都不会丢，只是多了一层可覆盖的样式。
