
## 项目启动
```
 1. npm install
 2. npm start
```
## 项目配置

1. 端口域名配置
  路径 /scripts/start.js
  的43与44行
  ```
  const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8001;
  const HOST = process.env.HOST || 'adminlocal.yihaoliu.cn';
  ```
2. 代理配置（脱离nginx 使用）
  路径 /config/proxy.config.js
  
## 路径简写
```
  'react-pages': path.join(__dirname, '../src/pages'),
  'react-ui': path.join(__dirname, '../src/Components'),
  'common': path.join(__dirname, '../src/common'),
  'utils': path.join(__dirname, '../src/common/js/utils'),
  'ajax': path.join(__dirname, '../src/common/js/ajax'),
  'style': path.join(__dirname, '../src/common/style')
```

## 目录设置（介绍src文件夹的主要文件夹）
1. Components 组件库文件夹
2. pages 页面文件夹
3. routers 路由配置文件夹
4. common 公共文件夹
5. common/apis 接口公共书写文件夹
6. Components/Hander/navs 菜单配置文件，里边有的参数必填且唯一


# ajax请求的使用
ajax 封装的位置 common/js/ajax
用的基础库是 axios
```
#服务接口配置
E:\github_react_huaru\20190130\krReact-feature-\src\common\apis\index.js
#服务域名端口配置
E:\github_react_huaru\20190130\krReact-feature-\config\proxy.config.js
// 引用
import ajax from 'ajax';


/**
  * url 请求接口的别名
  * params 请求的参数是一个对象
  * config {hander} 里边有一个hander对象用于修改 hander 配置
/
//get请求

ajax.get(url,params,config).then((res)=>{
  //返回数据处理
}).catch((err)=>{
  //错误数控处理
})


//put请求

ajax.put(url,params,config).then((res)=>{
  //返回数据处理
}).catch((err)=>{
  //错误数控处理
})

//delete请求

ajax.delete(url,params,config).then((res)=>{
  //返回数据处理
}).catch((err)=>{
  //错误数控处理
})

#树之间拖动相关文件

dialog_tree.js  拖动树的业务控制
dialog_tree.less 控制拖动树的样式
draggable.les  控制拖动树窗口的样式