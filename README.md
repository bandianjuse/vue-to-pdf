# vue-to-pdf

> 一个vue.js的组件，可以将html转化为pdf和图片并进行下载


## 安装


```sh
$ npm i vue-to-pdf --save
```

## 引入

```js
import vueToPdf from 'vue-to-pdf';

Vue.use(vueToPdf);
```

## 使用

```js
new Vue({
    template: `<div ref="content">打印出的内容</div>`,
    mounted() {
        this.$PDFSave(this.$refs['content'], '我的文件')

        // 或
        var promiseObj = this.$PDFOutput(this.$refs['box'])

        promiseObj.then((value) => {
            console.log(value)
        })              

    }  
})
                  
```

### $PDFSave(dom, name)
> vue 实例方法，可以将dom转换成pdf输出

### promiseObj(dom)
> vue 实例方法, 可以将dom转成pdf的dataurl, 返回promise。

