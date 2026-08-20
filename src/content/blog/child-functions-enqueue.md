---
title: "子主题 functions.php 正确加载父主题样式"
description: "用 wp_enqueue_scripts 在子主题中继承并追加 B2 主题样式，顺序不打架。"
pubDate: 2026-01-15
category: 美化
tags: ["B2主题", "functions.php", "WordPress"]
author: 大可
---
很多教程让你在子主题 `style.css` 里写 `@import url(../b2/style.css)`，但 `@import` 会阻塞渲染、拖慢首屏。更规范的做法是用 `wp_enqueue_scripts` 钩子。

## 标准写法

```php
<?php
add_action( 'wp_enqueue_scripts', 'b2_child_enqueue' );
function b2_child_enqueue() {
    // 先加载父主题样式
    wp_enqueue_style(
        'b2-parent-style',
        get_template_directory_uri() . '/style.css'
    );
    // 再加载子主题样式（自动排在父主题之后）
    wp_enqueue_style(
        'b2-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'b2-parent-style' ),
        wp_get_theme()->get( 'Version' )
    );
}
```

关键点：`get_template_directory_uri()` 指向**父主题**，`get_stylesheet_directory_uri()` 指向**当前启用的子主题**。第三个参数把父样式设为依赖，保证顺序。

之后你所有自定义 CSS 都写在子主题 `style.css`，父主题更新也不会被冲掉。
