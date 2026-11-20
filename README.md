# 卓工2601班 · 班级共享信息文档

浙江大学卓越工程师班 2601 班的共享信息站点，基于 [VitePress](https://vitepress.dev) 构建，部署到 GitHub Pages。

## 快速开始

### 本地开发

```bash
# 安装依赖（首次）
npm install

# 启动本地预览（默认 http://localhost:5173）
npm run docs:dev
```

### 构建

```bash
npm run docs:build
npm run docs:preview   # 本地预览构建产物
```

## 目录结构

```
.
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署脚本
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts             # 站点配置（导航、侧栏、base 路径等）
│   │   └── theme/
│   │       ├── index.ts           # 主题入口
│   │       └── style.css          # 现代科技风自定义样式
│   ├── public/                    # 静态资源（logo、favicon）
│   ├── index.md                   # 首页
│   ├── resources.md               # 资料共享
│   └── faq.md                     # 常见问题 FAQ
└── package.json
```

## 部署到 GitHub Pages

1. 把本目录推送到 GitHub 仓库（分支名建议 `main`）。
2. 打开仓库 **Settings → Pages**，在 **Source** 里选择 **GitHub Actions**（**不要**选 "Deploy from a branch"，因为 VitePress 需要构建步骤）。
3. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布。到 **Actions** 页可查看进度，成功后站点地址形如：
   - 项目仓库：`https://<用户名>.github.io/<仓库名>/`
   - 个人主页仓库（仓库名 `<用户名>.github.io`）：`https://<用户名>.github.io/`

### ⚠️ 重要：base 路径

如果部署到**项目仓库**（非 `<用户名>.github.io`），必须修改 `docs/.vitepress/config.mts` 里的 `base`：

```ts
base: '/<仓库名>/'   // 例如 base: '/zhuogong-2601/'
```

否则页面资源会 404。改完后重新推送即可。

## 如何维护内容

- **改资料共享**：编辑 `docs/resources.md`。
- **改 FAQ**：编辑 `docs/faq.md`，每条用 `<details><summary>问题</summary>答案</details>` 折叠。
- **加页面**：在 `docs/` 下新建 `.md`，并在 `config.mts` 的 `nav` / `sidebar` 里加上链接。

> 本仓库已按 `delicious-pear.github.io` 配置好 `base: '/'` 与"编辑此页"链接，直接推送即可。
