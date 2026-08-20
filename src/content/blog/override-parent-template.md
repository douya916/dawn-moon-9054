---
title: "子主题覆盖父主题模板"
description: "在子主题目录放同名模板文件即可覆盖 B2 对应模板，无需改动父主题。"
pubDate: 2026-07-05
category: 美化
tags: ["B2主题", "模板", "子主题"]
author: 大可
---
想改 B2 的某个页面结构（比如文章页底部），最干净的方式是用子主题**同名覆盖**。

## 覆盖规则

WordPress 模板层级：当前子主题里的同名文件优先于父主题。例如：

```text
b2-child/single.php      → 覆盖 b2/single.php（文章页）
b2-child/header.php      → 覆盖 b2/header.php
b2-child/page-about.php  → 覆盖特定页面
```

## 推荐做法：继承而非复制

直接复制整个父模板再改，父主题更新时你的改动可能和新逻辑冲突。更稳的是：
1. 只覆盖你需要改的那一层；
2. 能通过 `functions.php` 的钩子/`filter` 改输出的，就别覆盖整文件；
3. 必须复制大文件时，同步关注父主题更新日志。

这样 B2 升级后，你的定制依然安全。
