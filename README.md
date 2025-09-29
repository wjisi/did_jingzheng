# 井证DID服务

> 符合W3C标准的去中心化身份解决方案

## 📋 项目简介

这是一个基于React构建的DID（去中心化身份）服务展示页面，提供安全、自主的数字身份解决方案。

## 🚀 技术栈

- **前端框架**: React 18.3.1
- **构建工具**: Vite 4.4.0
- **样式框架**: Tailwind CSS 3.4.0
- **路由管理**: React Router DOM 6.8.0
- **HTTP客户端**: Axios 1.6.0
- **开发语言**: JavaScript (ES6+)

## 📁 项目结构

```
jingzheng-did-react/
├── public/                 # 静态资源目录
│   └── index.html         # 原始HTML文件（Coze生成）
├── src/                   # 源代码目录
│   ├── components/        # React组件
│   │   ├── Header.jsx    # 页面头部组件
│   │   ├── Main.jsx      # 主要内容组件
│   │   └── Footer.jsx    # 页面底部组件
│   ├── assets/           # 静态资源
│   │   ├── css/          # 样式文件
│   │   └── *.svg         # 图标文件
│   ├── App.jsx           # 主应用组件
│   ├── App.css           # 应用样式
│   ├── main.jsx          # 应用入口
│   └── index.css         # 全局样式
├── static/               # 编译后的静态文件
│   ├── css/              # CSS文件
│   └── js/               # JavaScript文件
├── dist/                 # 构建输出目录
├── package.json          # 项目配置
├── vite.config.js        # Vite配置
├── tailwind.config.js    # Tailwind配置
└── README.md             # 项目说明
```

## 🛠️ 开发环境设置

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📦 项目特点

### ✅ 已实现功能

- 响应式设计，支持移动端和桌面端
- 现代化的UI设计，使用Tailwind CSS
- 组件化架构，易于维护和扩展
- 优化的构建配置，支持代码分割

### 🔄 待开发功能

- 用户注册和登录
- DID身份创建和管理
- 身份验证和授权
- 区块链集成
- API接口对接

## 🎨 设计说明

### 色彩方案

- 主色调：蓝色系 (#1e3a8a - #3b82f6)
- 背景：渐变蓝色
- 文字：白色/深灰色

### 组件设计

- **Header**: 品牌标识 + 主标题 + 描述文字
- **Main**: 装饰性图标 + 占位文字
- **Footer**: 版权信息 + 备案号

## 🔧 开发指南

### 添加新组件

1. 在 `src/components/` 目录下创建新组件
2. 使用函数式组件和React Hooks
3. 遵循现有的命名规范

### 样式开发

- 优先使用Tailwind CSS类名
- 自定义样式写在对应的CSS文件中
- 保持响应式设计原则

### 代码规范

- 使用ES6+语法
- 组件名使用PascalCase
- 文件名使用PascalCase.jsx
- 保持代码简洁和可读性

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👥 贡献者

- 上海广元信息科技有限公司

## 📞 联系方式

如有问题或建议，请联系开发团队。

---

**注意**: 这是一个展示项目，实际功能还在开发中。更多服务，敬请期待！
