/**
 * axios 基于 promise 的 xhr 封装所以 axios 接收 xhr 的参数
 * 并且 axios.interceptors.request.use 拦截器可在请求或者返回被 then 或者 catch 处理之前对它们进行拦截
 */
import axios from "axios";
import APIS from "../../apis";
// 获取参数类型
const toType = obj => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

// 配置默认
axios.defaults = Object.assign(axios.defaults, {
  //正式环境和开发测试域名区分 
  //baseURL:'//127.0.0.1:8090',
  //baseURL:`//${process.env.NODE_ENV === 'production' ? '' : 'adminlocal'}.krspace.cn`,
  timeout: 10000, //超时
  withCredentials: true ,// 跨域请求是否提供凭据信息
  
})

// http请求拦截器
axios.interceptors.request.use(config => {
  // 这里做拦截处理
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response=>{
  return response;
},error => {
  if (error.response) {
    // 如果根据状态吗判断请求状态在这里做处理
  }
})

// 参数过滤函数
function filterNull(o) {

  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === "string") {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === "object") {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === "array") {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}


// 错误信息批量处理
function errorFormat(error, reject, callback) {
  // 登录判断不同项目不一样

  if (error && error.status && error.status >= 400) {
    const resData = res.data || {};
    if (resData.code && resData.code == 'NON_LOGIN') {

      //跳转到登录页面 并记录当前页面地址
      const redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/login?ROUT=${redirectUrl}`;

    } else {
      reject(res)
    }
  }else{
    reject(error);
  }
  callback && callback(error);
}

// 请求处理批量处理
function requestformat(method, url, params, config, callback) {
  return new Promise((resolve, reject) => {
    let allParams = {
      url: APIS[url].url,
      method,
      config,
    };
    let headers = {};
    if (!APIS[url].url) {
      return;
    }
   
    // params空参数或者null, undefined 过滤
    params = params ? filterNull(params) : {}
    // 初始化 config
    if (config && config['headers']) {
      headers = config['headers'];
      delete config['headers'];
      allParams.headers = headers;
     
    }
    if('get,delete'.indexOf(method)!=-1 ){
      allParams.params = params;
    }else{
      //post请求参数用&拼接
      allParams.data = params;
    }
    axios(allParams).then(function (response) {
      resolve(response);
      callback && callback(response)
    }).catch(function (error) {
      errorFormat(error, reject, callback)
    });
  });
}


export default {
  get: (url, params, config, callback) => {
    return requestformat('get', url, params, config, callback)
  },
  post: (url, params, config, callback) => {
    return requestformat('post', url, params, config, callback)
  },
  put: (url, params, config = {}, callback) => {
    return requestformat('put', url, params, config, callback)
  },
  delete: (url, params, config, callback) => {
    return requestformat('delete', url, params, config, callback)
  },
};
