---
title: "自定义 WordPress 短代码 Shortcode"
description: "用 add_shortcode 封装可复用组件，在文章里一键插入卡片、按钮等。"
pubDate: 2026-06-28
category: 技术
tags: ["WordPress", "Shortcode", "functions.php"]
author: 大可
---
想在文章里反复插入某段「提示框」「按钮」，每次手写 HTML 太累。短代码（Shortcode）能把它们封装成 `[tip]...[/tip]`。

## 注册一个提示框

```php
add_shortcode( 'tip', function ( $atts, $content ) {
    return '<div class="tip-box">'
         . do_shortcode( $content )
         . '</div>';
} );
```

文章里写：

```text
[tip]这是一条重要提示[/tip]
```

## 带属性

```php
add_shortcode( 'btn', function ( $atts ) {
    $a = shortcode_atts([ 'href' => '#', 'text' => '按钮' ], $atts );
    return "<a class='btn' href='{$a['href']}'>{$a['text']}</a>";
} );
```

用 `shortcode_atts` 设默认值，避免属性缺失报错。封装好后，写文章效率翻倍。
