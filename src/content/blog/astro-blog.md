---
title: 用 Astro 搭建一个高性能个人博客
description: 从零开始，用 Astro 内容集合与 Tailwind 打造一个轻量、快速、对中文友好的个人博客。
pubDate: 2026-03-12
category: 技术
tags: [Astro, 静态站点, 前端]
author: 大可
---

很多人想写博客，却被臃肿的方案劝退。其实，一个个人博客最需要的不是复杂的功能，而是**写得快、读得爽、加载快**。Astro 恰好满足这三点。

## 为什么选 Astro

Astro 默认零 JavaScript 输出，把内容在构建时渲染成静态 HTML。对于以文字为主的博客来说，这是最理想的状态：

- 首屏极快，对 SEO 友好；
- 内容用 Markdown 书写，专注写作；
- 需要时再按需引入交互组件。

## 用内容集合管理文章

Astro 的 Content Collections 让我可以用类型安全的 schema 约束每篇文章的元信息：

```ts
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});
```

这样既能享受编辑器的自动补全，又能在构建期拦截缺失字段的低级错误。

## 一点小建议

> 不要在一开始就追求完美的主题。先能写、能发布，再慢慢打磨排版。

把这台"写作机器"跑起来之后，剩下的，就是坚持更新了。
