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
<vue-to-pdf file-name="我的PDF文件">
    <div>这里是测试内容</div>
    <div data-html2canvas-ignore>这里是忽略的内容</div>
    <download-pdf><button>点击下载pdf</button><download-pdf>
    <download-image><button>点击下载image</button></download-image>
</vue-to-pdf>                      
```

### vue-to-pdf
> 被vue-to-pdf组件的内容可以转化为pdf或图片。

### download-pdf
> 使用download-pdf组件将会添加pdf点击下载事件。

### download-image
> 使用download-image组件将会添加image点击下载事件

### file-name
> 下载的文件名，可以在 <download-pdf>和<download-image>添加file-name props 来设置下载不同名称的效果。

### data-html2canvas-ignore
> 在dom标签添加data-html2canvas-ignore属性，标签的内容不会添加到pdf和image里
