---
title: "WordPress 过滤器与动作钩子入门"
description: "理解 add_filter / add_action，用钩子在 B2 输出前后插入或改写内容。"
pubDate: 2026-07-12
category: 技术
tags: ["WordPress", "Hook", "Filter"]
author: 大可
---
钩子（Hook）是 WordPress 的扩展机制，不用改核心代码就能干预流程。分两类：

## 动作 add_action

在某个时机「做事」，比如加载脚本：

```php
add_action( 'wp_footer', function () {
    echo '<script>console.log("loaded");</script>';
} );
```

## 过滤器 add_filter

「改写」某个值，比如给文章末尾加版权：

```php
add_filter( 'the_content', function ( $content ) {
    if ( is_single() ) {
        $content .= '<p>© 大可</p>';
    }
    return $content;
} );
```

## 优先级

第三个参数控制执行顺序，默认 10，数字越小越早。B2 很多功能也挂在钩子上，善用它们比覆盖模板更安全。
