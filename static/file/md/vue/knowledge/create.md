## vue项目环境的搭建(基于vuecli3.0快速构建vue项目)[参考链接01](`https://www.cnblogs.com/lanshengzhong/p/10386986.html`)[参考链接02](`https://juejin.cn/post/6844903775950356488`)

### 工具安装

1. 安装vscode[下载地址](https://code.visualstudio.com/docs/?dv=win)
2. 安装node[下载地址](http://nodejs.cn/download/)傻瓜安装,安装包同时安装 node 和 npm;
   终端或cmd中:验证 node 和 npm 是否成功 node-v npm-V 显示版本号就为成功
3. 安装yarn终端或cmd中:全局安装=> npm install -g yarn
4. 安装vue脚手架[文档地址](https://cli.vuejs.org/zh/guide/installation.html)终端或 cmd 中:全局安装 ==> npm install -g @vue/cli #OR yarn global add @vue/cli
   npm install -g @vue/cli@4.5.13 (不加后缀将安装最新版本，加后缀安装指定版本)
   vue -V查看vue脚手架版本，看是否安装成功
   检测安装脚手架是否成功，终端或 cmd 中: vue --version

### 构建项目

1. 在终端,用 cd 命令进入你想要创建示例的文件夹,
2. 执行 vue create hello-world
3. 使用方向键和 Enter 选择 "Manually selectfeatures(手动选择功能)"选项 你会看到的第一个菜单允许你选择你想要包含在你的项目中的功能。
   确保 "Babel" 和 "Linter/Formatter" 这两项是被选中的如果他们没有被选中,使用方向键切换,空格键选中,一旦他们被选中按下 Enter 继绩进行。
4. 选择 vue 版本。切换选中 "Vue 2.xx" 然后再次按下 Enter
5. 为 linter/formatter 选择一个配置。
   切换选中 "Eslint with error preventiononly" 然后再次按下 Enter。这样辅助我们捕获常见的并且不自以为是的错误。
   然后你会被询问需要那种自动化的 lint, 选择 "Lint on save, 这样我们在项目中保存文件的时候就会自动检查错误。按下 Enter 键继续
6. 选择把配置文件放在哪里。
   "In dedicated config files" 这个选项会把你的配置文件比如 ESlint 单独放在一个文件里。
   "In package.json" 则会把配置放进项目的 package.json文件里。
   选择" In dedicated config files"然后敲下 Enter
7. 最后会问你,是否选择把本次的选择作为将来的一个预设配置 (Save this as a preset forfuture projects?),这个就完全由你自己决定了。
   如果你想把本次的配置作为一个预设配置并且以后想再次使用的话,按下 y , 否则按下 n
8. 本地运行程序：yarn serve 或 npm run serve

### 编码规范[(参考链接)](https://v3.cn.vuejs.org/guide/introduction.html)

#### 项目文件结构

```
|-- dist                       # 打包后文件夹
|-- public                     # 静态文件夹
|   |-- favicon.ico
|   |-- index.html                    #入口页面
|-- src                        # 源码目录
|   |--assets                        # 模块资源
|   |--components                    # vue公共组件
|   |--views
|   |--App.vue                        # 页面入口文件
|   |--main.js                        # 入口文件，加载公共组件
|   |--router.js                      # 路由配置
|   |--store.js                       # 状态管理
|-- .env.pre-release          # 预发布环境
|-- .env.production          # 生产环境
|-- .env.test              # 测试环境
|-- vue.config.js             # 配置文件
|-- .eslintrc.js                  # ES-lint校验
|-- .gitignore                  # git忽略上传的文件格式
|-- babel.config.js               # babel语法编译
|-- package.json                # 项目基本信息
|-- postcss.config.js            # CSS预处理器(此处默认启用autoprefixer)
```

### 安装路由:[文档地址](https://router.vuejs.org/zh/installation.html)

执行: `vue add router`
会添加 view 文件夹,所有的页面文件均添加到此文件夹中

### 安装iview:[文档地址](https://router.vuejs.org/zh/installation.html)

执行: ``npm install view-design --save``
按需导入：安装babel-plugin-import  `npm install babel-plugin-import --save-dev` 根目录文件夹新建 .babel.config.js文件并进行配置
在src文件中新建plugins文件夹并在其中新建一个 iview.js文件，该文件进行按需导入
在main.js 文件中导入 iview.js 文件 `import '@/plugins/iview.js`

### 安装vuex :

`npm install vuex --save`
在src文件夹中新建store文件夹，在文件夹中新建 index.js 文件 文件中
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
main.js 文件中导入 import store from './store' 并在new Vue 中进行注册

### 安装 axios :

npm install- save axios``
在 window.js中进行注册,并在main.js文件中导入window.js,在 .eslintrc.js和$this一样进行注册

### 安装 is :

`npm install is_js`
在 window.js中进行注册,并在main.js文件中导入window.js,在 .eslintrc.js和$this一样进行注册

### 安装 lodash :

`npm i --save lodash`

在 window.js中进行注册,并在main.js文件中导入window.js,在 .eslintrc.js和$this一样进行注册

### 安装 dayjs :

`npm install dayjs --save`
在 window.js中进行注册,并在main.js文件中导入window.js,在 .eslintrc.js和$this一样进行注册

### 安装 jsonp :

`npm install jsonp`
导入使用(主用用于解决跨域问题)

### 安装 less-loader :

```
npm install style-resources-loader vue-cli-plugin-style-resources-loader less-loader less -S
npm i less less-loader style-loader css-loader --save-dev
```
然后在根目录文件夹中新建 vue.config.js中对其进行配置

```
const path = require('path')
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
             preProcessor: 'less',
             patterns: [
                 path.resolve(__dirname, './src/assets/common/global.less')
             ]
        }
    }
}
```

less-loader 版本过高可能会报错,解决办法

```
npm uninstall --save less-loader 卸载less-loader
npm install -D less-loader@7.0 安装7.x版本的less-loader
```

### 文件夹

assets文件夹中新建css文件夹放全局样式global.css tabs-customize.css

main.js 文件中导入全局样式 import '@/assets/css/global.css'

在src文件夹中新建一个utils文件夹,存放自定义方法

utils文件中新建window文件夹，window文件夹中新建window.js文件用于注册全部变量 window文件中自定义的函数和配置$this window.$this = $app一样
想在一个源文件里使用全局变量,在 .eslintrc.js中定义这些全局变量,这样 ELInt就不会发出警告了
最后在main.js 文件中导入 window.js文件

### 静态页面总结

1.页面书写按一行一行的写
2.根据关联性确定一行中的内容板块盒子
如果盒子呈上下排布那么就用标准流布局 如果盒子呈现左右排布那么就使用浮动布局
如果左右排布的盒子中又有嵌套上下排布的盒子可考虑定位布局
3.盒子样式属性书写顺序
布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
自身属性：width / height / margin / padding / border / background
文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow /background:linear-gradient …
4.根据实际设计页面书写样式
在书写过程中会先量盒子宽高然后给一个背景色和123的内容对盒子位置进行观察，结合浮动 定位 和外边距margin对位
置进行调整，调整完成之后观察盒子内部是否有内边距padding值，然后对文字进行调整


