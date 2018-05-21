# vue-cli-typescript-webpack-demo

> A Vue.js project with vue-cli + typescript + scss + webpack.

## Init

``` bash
npm install vue-cli -g  

vue init webpack projectName  

npm install typescript ts-loader --save  

npm install vue-class-component vue-property-decorator --save
```

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

## Webpack Configuration Optimization
* 1、Remove extra css
``` bash
const glob = require('glob');
const PurifyCssPlugin = require('purifycss-webpack');
...
plugins: [
    ...
    new PurifyCssPlugin({
      paths: glob.sync(resolve('src/*.html'))
    }),
    ...
]  
```
* 2、[happypack](https://github.com/amireh/happypack)
``` bash
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length > 4 ? 4 : os.cpus().length
})
...
module: {
  rules: [
    ...
    {
        test: /\.js$/,
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        use: 'happypack/loader?id=happy-js',
        // loader: 'babel-loader',
    },
    ...
  ]
}
...
plugins: [
    ...
    new HappyPack({
      id: 'happy-js',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true
    }),
    ...
]
```
* 3、webpack.DllPlugin and webpack.DllReferencePlugin  
(1) create dll.config.  
reference document： ```build/webpack.dll.conf.js```  
(2) add plugin to ```build/webpack.dev.conf.js```
``` bash
plugins: [
  ...
  new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '.'),
      manifest: require(path.resolve(__dirname, '../static', 'vendor.manifest.json'))
  }),
  ...
]
```  
(3) add link to html file. (we can use : [add-asset-html-webpack-plugin](https://github.com/SimenB/add-asset-html-webpack-plugin))
``` bash
plugins: [
  ...
  new AddAssetHtmlPlugin({
      includeSourcemap: false,
      filepath: path.resolve(__dirname, '../static', '*.dll.js'),
  }),
  ...
]
```

## Problems

``` bash
Error 1：Module build failed: TypeError: Cannot read property 'vue' of undefined  
Env: webpack 4.8.x  
Solution： change webpack 4.x => webpack 3.x, webpack-dev-server 3.x => webpack-dev-server 2.x, ts-loader 4.x => ts-loader 3.x  
```
``` bash
Error 2: Cannot find module 'webpack/schemas/WebpackOptions.json'  
Env: webpack 3.11.0  
Solution：re-install webpack 
```
``` bash
Error 3: "$bg-color: #fefefe;": Invalid CSS after "...load the styles": expected 1 selector or at-rule, was "var content = requi"  
Solution: Maybe your webpack.base.conf is merged with another config where there is another rule for .scss files.
```
``` bash
Error 4: Cannot destructure property `createHash` of 'undefined' or 'null'.
Solution: it's need to update wepback to ^4.3.0 or laster
```
