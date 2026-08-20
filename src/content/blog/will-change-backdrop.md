---
title: "will-change 与 backdrop-filter 的正确使用"
description: "避免 will-change 滥用导致内存暴涨，以及在滚动列表里谨慎使用 backdrop-filter。"
pubDate: 2026-04-05
category: 技术
tags: ["性能", "will-change", "backdrop-filter"]
author: 大可
---
这两个属性都是「双刃剑」，用错比不用更糟。

## will-change 不是越多越好

`will-change: transform` 会提示浏览器把元素常驻合成层。若给列表里每个卡片都加，会创建几十个图层，内存飙升、滚动卡顿。

原则：
1. 只在**确实会动画**的元素上用；
2. 动画结束可考虑移除（JS 动态加/去）；
3. 不要写在通配符或大量重复选择器上。

## backdrop-filter 在滚动列表里的坑

玻璃模糊要在每一帧对背后内容重新采样，列表滚动时开销极大，常见表现是「页面滚不动」。

解决办法：
1. 只对固定元素（如顶部导航）用 `backdrop-filter`；
2. 列表卡片改用半透明纯色背景代替模糊；
3. 必要时用 `contain: paint` 限制重绘范围。
