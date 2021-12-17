# Learn TypeScipt

## TypeScript 常用

全局安装：  
> npm install typescript -g

查看版本号：（书 3.7.2 教程 4.5.5 最新 4.6.2）  
> npm -v

项目初始化：  
> tsc --init

按tsconfig.json配置进行编译：
> tsc

运行编译后生成的文件用 node
> node ./dist/...js

## TypeScript + Vue + Vite 项目

新建并初始化项目，初始化时需要联网
> npm init vite

创建过程中选择或者输入如下命令
> ✔ Project name: vite-project  
> ✔ Select a framework: › vue  
> ✔ Select a variant: › vue-ts  

进入项目中，并安装项目依赖
> cd vite-project  
> npm install 或 yarn install

引入vue-router
> npm install vue-router@4 -s  
> 或者 npm install vue-router@next -s  

引入状态管理 pinia，以便解决跨组件的状态共享。同时引入pinia持久化插件。  
> npm i pinia -s
> npm i pinia-plugin-persistedstate -s
