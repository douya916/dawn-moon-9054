---
title: "nodejs环境配置"
description: "瓜奇搭建教程 · 第 4 章：nodejs环境配置"
order: 4
---
## 相关步骤 - 以视频为准

### 创建项目目录

```
node_global
node_cache
```

### 一、准备工作

1. 以管理员身份打开 PowerShell：
   1. 开始菜单搜索 PowerShell
   2. 右键点击「以管理员身份运行」

### 二、创建项目目录

1. 在 Node.js 安装根目录（示例路径：D:\node）手动创建两个文件夹：
   - D:\node\node_global：存放全局安装的包
   - D:\node\node_cache：存放 npm 缓存文件

### 三、允许运行本地脚本（解决权限限制）

#### 3.1 执行权限配置命令

1. 管理员 PowerShell 中执行下方命令：

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2. 系统弹出确认提示时，英文输入法输入 A 回车（Yes to All）

#### 3.2 验证权限配置结果

1. 执行验证命令：

```powershell
Get-ExecutionPolicy -List
```

2. 预期效果：CurrentUser 作用域权限为 RemoteSigned

### 四、配置 npm 全局路径

1. PowerShell 依次执行两条配置命令：

```powershell
npm config set prefix "D:\node\node_global"
npm config set cache "D:\node\node_cache"
```

### 五、配置环境变量

#### 5.1 打开环境变量面板

1. 方式一：此电脑右键 → 属性 → 高级系统设置 → 环境变量
2. 方式二：Win+R 快捷键，输入 SystemPropertiesAdvanced 回车直达

#### 5.2 配置用户变量 Path

1. 在「用户变量」区域找到 Path，双击编辑
2. 点击「新建」，填入路径：D:\node\node_global
3. 依次点击确定保存设置

#### 5.3 新建系统变量 NODE_PATH

1. 「系统变量」区域点击「新建」
2. 变量名：NODE_PATH
3. 变量值：D:\node\node_global\node_modules
4. 全部弹窗依次点击确定关闭

### 六、验证配置

1. 关闭原有终端，重新打开普通权限 PowerShell
2. 依次执行两条查看命令：

```powershell
npm config get prefix
npm config get cache
```

3. 预期输出：
   - 第一条：D:\node\node_global
   - 第二条：D:\node\node_cache

### 七、切换国内镜像源（加速下载）

#### 7.1 查看当前镜像源

1. 执行命令：

```powershell
npm config get registry
```

2. 默认输出：https://registry.npmjs.org/

#### 7.2 切换为淘宝镜像（永久生效）

1. 执行切换命令：

```powershell
npm config set registry https://registry.npmmirror.com/
```

#### 7.3 校验镜像是否切换成功

1. 再次执行查看命令：

```powershell
npm config get registry
```

2. 正确返回：https://registry.npmmirror.com/

### 八、测试全局安装

#### 8.1 全局安装 express

1. 执行全局安装命令（-g 代表全局安装）：

```powershell
npm install express -g
```

2. 安装成功标识：终端输出类似 added 63 packages in 5s
3. 文件实际安装目录：D:\node\node_global\node_modules

### 九、安装 pnpm（可选，推荐）

#### 9.1 安装 pnpm

1. 执行全局安装命令：

```powershell
npm install -g pnpm
```

2. 成功提示示例：added 1 package in 3s
3. 安装路径：D:\node\node_global

#### 9.2 验证 pnpm 安装

1. 执行版本查看命令：

```powershell
pnpm -v
```

2. 正常输出版本号（例：8.15.0）；提示找不到命令则查看第十一节排障方案

### 十、检查版本信息

1. 查看 Node 版本：

```powershell
node -v
# 等价写法
node --version
```

   预期：v20.10.0 这类格式版本号

2. 查看 pnpm 版本：

```powershell
pnpm -v
# 等价写法
pnpm --version
```

   预期：数字格式版本号（例：8.15.0）

### 十一、常见问题排查

#### 11.1 pnpm -v 提示不是内部或外部命令

1. 第一步：校验全局路径配置

```powershell
npm config get prefix
```

   确认输出为 D:\node\node_global

2. 第二步：重新打开环境变量面板，核对用户变量 Path 包含 D:\node\node_global
3. 第三步：关闭全部 PowerShell 窗口，重新打开终端重试

#### 11.2 npm install 报错 EPERM 权限不足

1. 找到 D:\node 文件夹 → 右键属性 → 安全
2. 点击「编辑」，选中当前用户名 / Users 用户组
3. 权限勾选「完全控制」，确定保存
4. 重新以管理员身份打开 PowerShell 执行安装命令

### 完成

至此，Windows 端 Node.js 完整本地开发环境配置完毕，可正常开启项目开发。
