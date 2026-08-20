# STYLE_GUIDE · 哔哔一二 设计系统

> 这是「哔哔一二」(bber.cn) 个人博客的**视觉风格规范**。任何 AI 或协作者在美化、扩展本 Astro 项目（或套用到其他 Astro 项目）时，**必须先阅读本文件并严格遵守其中的约定**，不要引入与规范冲突的新样式、新配色或新字体。
>
> 风格真源（代码实现）：
> - `tailwind.config.mjs` — 颜色色阶、字体栈、动画 token
> - `src/styles/global.css` — 基础排版、暗色变量、组件类（`.btn` / `.card` / `.glass` 等）

---

## 1. 设计理念（风格气质）

- **干净、克制、留白充足**：以卡片为单位组织内容，避免大块实心色块。
- **柔和的蓝紫科技感**：品牌主色为靛蓝/紫（`primary` 色阶），强调处用「蓝紫渐变」点缀，不堆砌多种高饱和色。
- **玻璃拟态顶栏与页脚**：导航栏、页脚使用半透明 + `backdrop-blur` 的毛玻璃质感。
- **中文优先排版**：正文用无衬线中文字体，标题用衬线中文字体增加文艺感。
- **暗色模式一等公民**：浅色与深色都要好看，所有颜色都用 `dark:` 配对声明。
- **动效克制**：只做轻量的淡入、上浮、悬停位移，统一过渡时长（200–300ms），并尊重 `prefers-reduced-motion`。

---

## 2. 颜色规范

### 2.1 品牌主色 `primary`（靛蓝/紫，indigo 系）
| 档位 | 色值 | 用途 |
|------|------|------|
| 50–200 | `#eef2ff`–`#c7d2fe` | 极浅底色、选中态背景 |
| 300–400 | `#a5b4fc`–`#818cf8` | 渐变起始、弱化强调 |
| **500** | `#6366f1` | 链接、图标基础色 |
| **600** | `#4f46e5` | **主按钮、主强调（最常用）** |
| 700 | `#4338ca` | 主按钮 hover |
| 800–900 | `#3730a3`–`#312e81` | 深色文字、深底强调 |

- 强调渐变统一用：`from-primary-600 to-violet-500`（标题渐变文字）、`from-primary-500 to-violet-500`（分类卡片）。
- **不要**随意引入红/绿/黄等饱和色作为主题色；分类/标签可用 `indigo / emerald / amber / rose / fuchsia` 等 Tailwind 预设作为**语义辅助色**，但必须低饱和、成对出现在浅/深模式。

### 2.2 中性色
| 场景 | 浅色模式 | 深色模式 |
|------|----------|----------|
| 页面背景 | `bg-slate-50` | `dark:bg-gray-950` |
| 卡片背景 | `bg-white` | `dark:bg-gray-900/60` |
| 正文文字 | `text-slate-800` | `dark:text-slate-200` |
| 标题文字 | `text-slate-900` | `dark:text-white` |
| 次要文字 | `text-slate-500` | `dark:text-slate-400` |
| 边框/分割线 | `ring-slate-200/70` 或 `border-slate-200/60` | `dark:ring-white/10` 或 `dark:border-white/10` |

> 浅色用 `slate` 系，深色用 `gray` 系（这是本项目刻意选择，保持冷暖一致）。新增组件请沿用这套映射。

### 2.3 语义辅助色（分类/标签用）
`技术`→indigo/violet、`生活`→emerald/teal、`读书`→amber/orange、`随笔`→rose/pink、`美化`→fuchsia/pink。均以 `from-X-500 to-Y-500` 渐变呈现。

---

## 3. 字体规范

### 3.1 字体栈（已在 Tailwind 定义）
- **正文 sans**：`"OPPO Sans" → "PingFang SC" → "Microsoft YaHei" → system-ui → sans-serif`
- **标题 serif**：`"OPPO Sans" → "Songti SC" → "SimSun" → Georgia → serif`（h1–h6 默认套用，统一为 OPPO Sans 风格）
- **代码 mono**：`ui-monospace → SFMono-Regular → Menlo → Monaco → Consolas → monospace`（系统等宽，零外部依赖）

### 3.2 加载方式
OPPO Sans 以 **本地托管** 方式引入：字体文件置于 `public/fonts/OPPOSans-Medium.woff2`，在 `global.css` 顶部用 `@font-face` 声明（`font-display: swap`），不再依赖任何外部字体 CDN。

> **约束**：默认仅使用 OPPO Sans（本地）+ 系统回退字体栈。严禁重新引入 Google Fonts / 任意国外字体 CDN 的 `@import` 或 `<link>`，避免国内访问超时阻塞渲染。新增字体须评估中文覆盖与体积。

---

## 4. 圆角 · 阴影 · 间距

| 元素 | 圆角 | 阴影 |
|------|------|------|
| 按钮 `.btn` | `rounded-xl` | 无 / primary 用 `shadow-sm`→hover `shadow-md` |
| 卡片 `.card` | `rounded-2xl` | `shadow-sm` → hover `shadow-xl` |
| 头像 | `rounded-3xl` | `shadow-lg` + `ring-4` |
| 标签 `.chip` | `rounded-full` | 无 |
| 滚动条滑块 | `rounded-full` | — |

- **过渡**：统一 `transition-all duration-200`（按钮/导航）或 `duration-300`（卡片）。
- **间距节奏**：区块纵向间距 `py-12 sm:py-16`；卡片内边距 `p-5 sm:p-6`。

---

## 5. 暗色模式约定

- 模式：`darkMode: 'class'`（在 `<html>` 上加 `class="dark"`）。
- **必须在 BaseLayout 注入防闪烁脚本**：在 `<head>` 用内联脚本根据 `localStorage` / `prefers-color-scheme` 预先设置 `dark` class，避免首屏白闪。
- 所有颜色都写 `dark:` 配对（见 2.2）。玻璃组件深色用 `dark:bg-gray-900/70`，浅色用 `bg-white/70`。

---

## 6. 动效约定

- 可用动画 token：`fade-in`(0.5s)、`slide-up`(0.5s)、`bounce-slow`(2s)。
- 卡片悬停：`.card-hover` = `hover:-translate-y-1 hover:shadow-xl`。
- 全局：`html { scroll-behavior: smooth }`，但在 `@media (prefers-reduced-motion: reduce)` 下改为 `auto`。
- **约束**：不做大面积位移、不长时间循环动画；过渡时长控制在 150–300ms。

---

## 7. 复用组件类（直接用，勿重复造）

定义在 `global.css` 的 `@layer components`，美化时优先使用，保持一致性：

| 类 | 作用 |
|----|------|
| `.btn` / `.btn-primary` / `.btn-ghost` | 按钮三态 |
| `.gradient-text` | 标题蓝紫渐变文字 |
| `.glass` | 毛玻璃容器（导航/页脚） |
| `.card` / `.card-hover` | 卡片基底 + 悬停上浮 |
| `.chip` | 圆角标签/分类胶囊 |
| `.container-blog` | 内容容器：`max-w-6xl` 居中，`px-4 sm:px-6 lg:px-8` |
| `.section-title` | 区块标题：`text-2xl sm:text-3xl font-bold` |

---

## 8. 布局与响应式

- **容器**：统一用 `.container-blog`（`max-w-6xl` ≈ 1152px，居中，左右留白随断点递增）。不要在页面里另写死宽度。
- **断点**：移动端优先；`sm`(≥640) / `lg`(≥1024) 为主用断点。大屏不无限拉宽，封顶 `max-w-6xl`。
- **文章列表布局**：`lg:grid-cols-[1fr_320px]`（主内容 + 320px 侧边栏），移动端单列堆叠。
- **导航**：桌面横排 + 右侧社交图标；移动端用汉堡菜单（Header 组件已实现），不要做成全屏遮挡式。
- **页脚**：备案号链接（工信部 `beian.miit.gov.cn`）+ 社交图标，单行或两行自适应。

---

## 9. AI 执行约束（务必遵守）

当被要求「美化 / 改版 / 新增页面 / 调整样式」时：

1. **先读** `STYLE_GUIDE.md` + `tailwind.config.mjs` + `src/styles/global.css`，理解现有 token。
2. **复用优先**：优先使用第 7 节的组件类与第 2–3 节的色值/字体；需要新样式时，沿用既有命名与 `dark:` 配对规则。
3. **不破坏一致性**：不引入新的主色相、不替换中文字体栈、不取消暗色模式配对。
4. **响应式必做**：任何新增 UI 都要在移动端（≤640）与宽屏（≥1280）下验证可用。
5. **动效克制**：遵循第 6 节时长与 `prefers-reduced-motion` 约定。
6. **不要删改** `tailwind.config.mjs` 的颜色/字体定义，除非明确被告知要换主题；如要扩展，在 `extend` 内追加而非覆盖。

---

## 10. 套用到其他 Astro 项目

若要把这套风格迁移到全新 Astro 项目：
1. 复制 `tailwind.config.mjs` 与 `src/styles/global.css` 两个文件。
2. 安装依赖：`@astrojs/tailwind`、`@tailwindcss/typography`、`tailwindcss`。
3. 在 `astro.config.mjs` 启用 `tailwind()` 集成。
4. 在 BaseLayout 注入暗色防闪烁脚本与 Google Fonts。
5. 之后所有页面/组件按本规范使用组件类与 token。
