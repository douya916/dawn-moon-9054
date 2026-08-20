---
title: "WordPress REST API 入门"
description: "用 REST API 读取文章与分类，为 B2 做自定义前端或小程序打基础。"
pubDate: 2026-06-21
category: 技术
tags: ["WordPress", "REST API", "JSON"]
author: 大可
---
WordPress 自带 REST API，几乎所有内容都能通过 HTTP 拿到 JSON，方便做自定义展示。

## 常用端点

```text
GET /wp-json/wp/v2/posts      # 文章列表
GET /wp-json/wp/v2/posts/123  # 单篇
GET /wp-json/wp/v2/categories# 分类
GET /wp-json/wp/v2/media      # 媒体
```

## 带参数筛选

```text
GET /wp-json/wp/v2/posts?categories=4&per_page=5&_embed
```
`_embed` 会顺带返回特色图片、作者等关联数据，减少请求数。

## 浏览器里试试

```js
const res = await fetch('/wp-json/wp/v2/posts?per_page=3');
const posts = await res.json();
console.log(posts.map((p) => p.title.rendered));
```

注意：公开读取默认开放；写操作需鉴权（Application Password 或 nonce）。
