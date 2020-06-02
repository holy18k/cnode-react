# 基于react+react-redux+redux-thunk+redux+logger+redux-persist+hook开发的cnode-react社区
---
## demo

## 目录结构
```
|-- undefined
    |-- .gitignore
    |-- config-overrides.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- .idea
    |   |-- cnode-react.iml
    |   |-- misc.xml
    |   |-- modules.xml
    |   |-- vcs.xml
    |   |-- workspace.xml
    |   |-- inspectionProfiles
    |       |-- Project_Default.xml
    |-- build
    |   |-- asset-manifest.json
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- precache-manifest.c0d8c238fbe8a49c5ce0467dd42cb69e.js
    |   |-- robots.txt
    |   |-- service-worker.js
    |   |-- lib
    |   |   |-- scale_750.js
    |   |-- skeleton
    |   |-- static
    |       |-- css
    |       |   |-- 1.c92ea28b.chunk.css
    |       |   |-- 1.c92ea28b.chunk.css.map
    |       |   |-- 10.e21e08f6.chunk.css
    |       |   |-- 10.e21e08f6.chunk.css.map
    |       |   |-- details.c7193bba.chunk.css
    |       |   |-- details.c7193bba.chunk.css.map
    |       |   |-- home.76f7f846.chunk.css
    |       |   |-- home.76f7f846.chunk.css.map
    |       |   |-- main.ba8e5233.chunk.css
    |       |   |-- main.ba8e5233.chunk.css.map
    |       |   |-- message.6bcbf69d.chunk.css
    |       |   |-- message.6bcbf69d.chunk.css.map
    |       |   |-- my.9c430bfa.chunk.css
    |       |   |-- my.9c430bfa.chunk.css.map
    |       |-- js
    |           |-- 0.06e60b79.chunk.js
    |           |-- 0.06e60b79.chunk.js.map
    |           |-- 1.c472d4b4.chunk.js
    |           |-- 1.c472d4b4.chunk.js.map
    |           |-- 10.e4c351ce.chunk.js
    |           |-- 10.e4c351ce.chunk.js.LICENSE.txt
    |           |-- 10.e4c351ce.chunk.js.map
    |           |-- collect.2ce55fec.chunk.js
    |           |-- collect.2ce55fec.chunk.js.map
    |           |-- details.33805d08.chunk.js
    |           |-- details.33805d08.chunk.js.map
    |           |-- home.77374904.chunk.js
    |           |-- home.77374904.chunk.js.map
    |           |-- main.84c52999.chunk.js
    |           |-- main.84c52999.chunk.js.map
    |           |-- message.d05d5a48.chunk.js
    |           |-- message.d05d5a48.chunk.js.map
    |           |-- my.e6408eab.chunk.js
    |           |-- my.e6408eab.chunk.js.map
    |           |-- myList.2813f85a.chunk.js
    |           |-- myList.2813f85a.chunk.js.map
    |           |-- runtime-main.8f4ab7fe.js
    |           |-- runtime-main.8f4ab7fe.js.map
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |   |-- lib
    |   |   |-- scale_750.js
    |   |-- skeleton
    |-- src
        |-- App.js
        |-- App.test.js
        |-- index.js
        |-- setupTests.js
        |-- assets
        |   |-- scss
        |       |-- index.scss
        |       |-- base
        |       |   |-- border.scss
        |       |   |-- layout.scss
        |       |   |-- setting.scss
        |       |-- mixin
        |           |-- config.scss
        |           |-- function.scss
        |           |-- mixins.scss
        |           |-- setOneBorder.scss
        |-- components
        |   |-- errorBoundary
        |   |   |-- index.js
        |   |-- footer
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- header
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- loading
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- PrivateRoute
        |   |   |-- index.js
        |   |-- replay
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |   |-- Replay.js
        |   |   |-- ReplayList.js
        |   |-- topics
        |       |-- index.scss
        |       |-- Topic.js
        |       |-- TopicsList.js
        |-- hook
        |   |-- useHash.js
        |   |-- useScollLoad.js
        |-- page
        |   |-- collect
        |   |   |-- index.js
        |   |-- details
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- home
        |   |   |-- index.js
        |   |-- login
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- message
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- my
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |-- my-list
        |       |-- index.js
        |-- router
        |   |-- index.js
        |-- service
        |   |-- config.js
        |   |-- fetch.js
        |   |-- index.js
        |-- skeleton
        |   |-- Details.js
        |   |-- List.js
        |-- store
        |   |-- actionType.js
        |   |-- index.js
        |   |-- actions
        |   |   |-- collect.js
        |   |   |-- details.js
        |   |   |-- message.js
        |   |   |-- my.js
        |   |   |-- topics.js
        |   |   |-- userInfo.js
        |   |-- reducers
        |       |-- collect.js
        |       |-- details.js
        |       |-- index.js
        |       |-- message.js
        |       |-- my.js
        |       |-- topics.js
        |       |-- userInfo.js
        |-- util
            |-- index.js

```


## 下载
```javascript
  git clone https://github.com/myfirebug/cnode-react.git
  cd cnode-react
  npm install (安装依赖模块)
```
## 运行
```javascript
  npm run dev (开发版本访问：http://localhost:3000/)
  npm run dist （发布生产版本）
```

## 功能
+ 登录、退出
+ 列表下拉加载、缓存非第一页数据
+ 详情(模拟点赞、收藏功能)未登录不显示评论、收藏、点赞、回复、删除
+ 我的消息(单条标记已读)
+ 个人中心 （未登录，显示登录，否则显示退出、最新创建的话题、最近参与的话题、收藏的）
+ 查看别人资料（最新创建的话题、最近参与的话题、收藏的）




