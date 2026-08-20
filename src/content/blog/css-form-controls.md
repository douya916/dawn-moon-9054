---
title: "纯 CSS 美化表单控件"
description: "用 appearance: none 重置默认样式，自定义复选框、单选与开关。"
pubDate: 2026-08-02
category: 美化
tags: ["CSS", "表单", "美化"]
author: 大可
---
浏览器默认的复选框、下拉框和精心设计的页面格格不入。用 CSS 把它们重做成统一风格。

## 重置与自定义复选框

```css
input[type="checkbox"] {
  appearance: none;
  width: 18px; height: 18px;
  border: 2px solid #cbd5e1; border-radius: 5px;
}
input[type="checkbox"]:checked {
  background: #6366f1; border-color: #6366f1;
}
```

`:checked` 状态换背景即可表现选中。

## 开关（toggle）

用 `label + checkbox` 配合 `::before` 做滑块：

```css
.switch { position: relative; width: 44px; height: 24px; }
.switch::before {
  content: ""; position: absolute; inset: 2px;
  background: #fff; border-radius: 999px; transition: .2s;
}
.switch:checked::before { transform: translateX(20px); }
```

记住保留 `:focus-visible` 轮廓，照顾键盘用户的可访问性。
