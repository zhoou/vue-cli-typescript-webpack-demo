# vue-cli-typescript-webpack-demo

> A Vue.js project with typescript.

## Init

npm install vue-cli -g  
vue init webpack projectName  
npm install typescript ts-loader --save  
npm install vue-class-component vue-property-decorator --save  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Problems

``` bash
Error 1：Module build failed: TypeError: Cannot read property 'vue' of undefined  
Env: webpack 4.8.x  
Solution： change webpack 4.x => webpack 3.x, ts-loader 4.x => ts-loader 3.x  
```
``` bash
Error 2: Cannot find module 'webpack/schemas/WebpackOptions.json'  
Env: webpack 3.11.0  
Solution：re-install webpack 
```
