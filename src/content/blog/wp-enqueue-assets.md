---
title: "用 wp_enqueue 正确引入 JS/CSS"
description: "杜绝直接在模板里写 script 标签，用 wp_enqueue 管理依赖与版本。"
pubDate: 2026-07-19
category: 技术
tags: ["WordPress", "enqueue", "资源"]
author: 大可
---
在 B2 子主题里直接往模板写 `<script src>` 看似省事，但会造成重复加载、顺序错乱、缓存失控。正确入口是 `wp_enqueue_*`。

## 标准引入

```php
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style('b2-child', get_stylesheet_uri(), [], '1.0.0');
    wp_enqueue_script(
        'b2-child-js',
        get_stylesheet_directory_uri() . '/main.js',
        ['jquery'],   // 声明依赖
        '1.0.0',
        true           // 放 body 末尾
    );
} );
```

好处：
1. 声明依赖（如 jquery）自动保证加载顺序；
2. 版本号参与缓存键，改版自动失效旧缓存；
3. WordPress 自动合并去重，避免多次引入。

只在后台用的脚本，挂 `admin_enqueue_scripts` 而非前台。
