# HRCMS前端工程说明

## 项目使用pnpm包 

### quick start
```
npm install -g pnpm
```

# 项目描述

- 框架采用 VUE + Vite + TS + Unocss

##文件结构描述

```
├─public
└─src
    ├─assets --存放
    ├─components -- 公共组件 组件名采用大驼峰命名
    │  └─icons
    ├─router -- 路由文件
    ├─stores -- 全局存储
    └─views -- 页面
       └─home
          └─index.vue

```

## 项目设置

```sh
pnpm install
```

### 开发模式下编译和热更新

```sh
pnpm run dev
```

### 类型检查、编译和压缩生产代码

```sh
pnpm run build
```

### lint 检查

```sh
pnpm run lint
```
