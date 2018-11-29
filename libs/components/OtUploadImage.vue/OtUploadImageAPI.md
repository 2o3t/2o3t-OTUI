# OtUploadImage API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| field | 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分 | String | 'avatar' |
| ki | 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分 | null | 0 |
| value | 显示该控件与否 | Boolean | false |
| url | 上传地址 | String | '' |
| params | 其他要上传文件附带的数据，对象格式 | Object | null |
| headers | Add custom headers | Object | null |
| width | 剪裁图片的宽 | Number | 200 |
| height | 剪裁图片的高 | Number | 200 |
| noRotate | 不显示旋转功能 | Boolean | true |
| noCircle | 不预览圆形图片 | Boolean | false |
| noSquare | 不预览方形图片 | Boolean | false |
| maxSize | 单文件大小限制 | Number | 10240 |
| langType | 语言类型, [ zh, zh-tw, en ] | String | 'zh' |
| langExt | 语言包 | Object | null |
| imgFormat | 图片上传格式 | String | 'png' |
| imgBgc | 图片背景 jpg情况下生效 | String | '#fff' |
| withCredentials | 是否支持跨域 | Boolean | false |
| method | 上传方式 | String | 'POST' |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @input |  v-model 事件 | (false): Void | - |
| @srcFileSet | - | (file.name, file.type, file.size); // 用户选取文件之后, 参数( fileName, fileType, fileSize ): Void | - |
| @cropSuccess | - | (createImgUrl, field, ki); // 图片截取完成事件（上传前), 参数( imageDataUrl, field ): Void | - |
| @uploadSuccess | - | (resData, field, ki); // 上传成功， 参数( jsonData, field ): Void | - |
| @uploadFail | - | (sts, field, ki); // 上传失败， 参数( status, field ): Void | - |

