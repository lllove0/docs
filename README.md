# 前端文档

> 基于 vitepress 搭建在线文档模板,支持 markdown 标题搜索,vue3 组件与 js 代码运行

可快速搭建 vue 3.x 项目技术文档。

- [github pages 在线文档](https://appbest.github.io/docs/)
- [gitee 在线文档](https://qve.gitee.io/docs/)
- [markdown 代码运行与搜索组件](https://www.npmjs.com/package/quick.run)

## 快速开始

- 克隆项目

```bash
git clone git@gitee.com:qve/docs.git
```

- 安装

```bash
# yarn 安装
yarn

# 调试vue
yarn dev

# 打包项目
yarn build
```

## vite 解决引用组件热更问题

清除缓存目录，

`/node_modules/.vite_opt_cache`

## 重要提示

- 需修改源码二级目录路径问题，参考文档底部
- <strong>调试时可删除</strong>
- 编译缓存目录 `/node_modules/.vite`
- 更新搜索数据源`keywords.json`,删除将生成最新数据源

## 更新

- 0.1.7
  `2021/6/2`

  - `quick-plugin-md 0.1.2` 更新支持多级路径搜索

- 0.1.6
  `2021/4/21`

  -`quick-plugin-md 0.0.9` 更新

- 0.1.5
  `2021/4/19`

  - `quick-plugin-md` 更新

- 0.1.4 `2021/4/19`

  - vitepress 升级到 `0.13.0` 已经解决路径问题，无需修改源代码
  - 支持 `quick-plugin-md`
  - 支持 `vue 3.0.5`

- 0.1.0 `2021/4/3`

  - qve 项目库更新`0.1.3`

- 0.0.9

  - `qveui`升级到`^0.4.2`

- 0.0.8 `2021-02-24`

  - `/theme/Layout.vue` 还需处理 `Message` `Frames` 的编译 Bug`document is not defined`
  - `vitepress` 升级到 `0.8.1`
  - `vue` 升级到 `3.0.5`
  - 适配主题
  - 侧边栏适配
  - 搜索适配
  - 代码运行库适配`CodeRun`

- 0.0.7
  `2020-11-14`

  - vitepress 升级到 0.7.4
  - 适配搜索与组件

- 0.0.2
  `2020-10-09`

  - 样式更新
  - `CodeRun` 新增 styled 代码样式定义

- 0.0.1
  `2020-10-06`

  - 样式适配
  - 全站搜索框，支持二级标题
  - 代码在线调试，绿色标识框

## 文档组件

- packages 文件夹

### `CodeRun` 代码在线调试

`<CodeRun dll="json" styled="height:20rem" ubb editable>`

```js
// js 在线测试执行代码
return 'test';
```

`</CodeRun>`

## 项目依赖

- [quick.lib](https://www.npmjs.com/package/quick.lib)
- [quick.run](https://www.npmjs.com/package/quick.run)

- [vitePress](https://github.com/vuejs/vitepress)

## 发布文档

- vitepress 0.8.1 及以下需要，当前项目无需更新。

### 图标目录

发布到服务器时需要将源图标文件夹 `/docs/fonts` 内容复制到打包的 `/dist/` 目录

### 域名二级目录路径问题

- 目录名与文件名，请使用小写

  需要发布为二级目录时，调试正常正式发布时会导致路径错误，
  需要修改以下文件。

  `node_modeules\vitepress\dist\client\app\utils.js`

  第 20 行（把整个 base 路径删除了导致 Bug 修改为 1 正常取值）

  ```js
  //pagePath = pagePath.slice(base.length).replace(/\//g, '_') + '.md';

  // 网站路径替换为文档目录
  pagePath = 'docs/' + pagePath.slice(base.length);
  pagePath = pagePath.replace(/\//g, '_') + '.md';
  // console.log(base,pagePath);
  ```

## git 入门

```bash
# 初始化
git init
#  获取项目
git remote add git@https://gitee.com/qve/docs.git
#由于在创建远程仓库时会初始化一个README.md文件，而本地仓库里没有，所以需要先执行pull操作将远程仓库拉取合并到本地仓库，否则会出错。执行代码：
git pull origin master
git add .
git commit -m "提交说明"
git push origin master
```
