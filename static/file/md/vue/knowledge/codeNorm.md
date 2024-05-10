## 代码规范

### 编辑器配置

代码去掉尾部空格和在最后一行新增一行,在编辑器中进行设置,主要设置为

```sh
"files.trimFinalNewlines": true,
"files.trimTrailingWhitespace": true,
```

### Eslint代码检验配置[参考链接](`https://eslint.bootcss.com/docs/user-guide/configuring`)

**eslintrc.js文件是安装eslint之后自动生成的**
1.vscode软件上安装的eslint插件是针对编辑器,他会根据 eslint规则在书写代码的时候给出报错(画红线)提示
2.创建项目的时候安装的 Linter/Formatter或者通过npm安装的eslint他会在项目编译的时候进行检验,报错信息在终端中进行
3.如果 vscope中不安装 eslint插件,代码编写阶段不对代码做 eslint检验,只有安装了 eslint插件才会在代码编写阶段根据eslint规则进行检验并给出相关红线提
4.保存时根据eslint规则自动格式化需要在 settings.json 配置文件中加如下代码

```
"editor.codeActionsOnSave":{
    "source.fixAll.eslint": true
}
// 如此将会在ct+s保存的时候根据 eslint 自动修正代码
```

### 关闭 eslint

1.直接将 vocode中得eslint禁用,只关闭对编辑器的检验,并没有关闭编译过程的检验
2.在 vue.config.js上配置如下:

```
module.exports = {
    lintOnSave: false,
}
// 此时编辑器和编译的检验全关闭,大的错误还是会又提示,小的错误不会有提示，为true时小的错误也会有提示
```

3.使用 eslintignore文件关闭 elint校验(有选择的关闭) 在根目录里新建 eslintignore文件在里面忽略就行,例如忽略sc文件如:
`/src/assets/js/**`
表示src文件夹里面的 assets文件夹里面的js文件夹里面的所有文件
`/src/assets/js/*adad*`
表示src文件夹里面的 assets文件夹里面的js文件里面的adad开头的所有内容

### 代码上库之前检验[参考链接](`https://blog.csdn.net/qq_35844177/article/details/90062809`)

提交代码 eslint 检查并自动格式化
在项目根目录下安装 **yarn add --dev husky lint-staged**
修改 package.json文件

```
"gitHooks": {
    "pre-commit": "lint-staged"
},
"lint-staged": {
    "*{js, jsx, vue, ts, tsx}": [
        "yarn lint"
    ]
}
```

**在 settings.json中的file配置中可以设置文件夹的显示与隐藏,配置案例如**

```
"files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/.history": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true
},
```

**eslint-plugin-vue**[参考链接](`https://eslint.vuejs.org/rules/max-attributes-per-line.html`)
