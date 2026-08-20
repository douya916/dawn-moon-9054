---
title: "用 Git 管理子主题版本"
description: "把 B2 子主题目录纳入 Git，记录每次美化改动，随时回滚。"
pubDate: 2026-07-26
category: 技术
tags: ["Git", "版本控制", "子主题"]
author: 大可
---
美化网站容易「改着改着不知道改了哪」。用 Git 管子主题目录，每次改动都可追溯、可回滚。

## 初始化

```bash
cd wp-content/themes/b2-child
git init
echo "node_modules/" > .gitignore
git add -A && git commit -m "init: 子主题骨架"
```

## 工作流

1. 每完成一个小功能（如「吸顶导航」）就 commit；
2. 重大改动开分支：`git checkout -b dark-mode`；
3. 出问题 `git log` 找提交，`git revert` 回退。

## 远程备份

推到私有仓库（GitHub/Gitee），换服务器或重装不丢成果。注意 `.git` 不要暴露到 web 根目录以外可访问的位置。
