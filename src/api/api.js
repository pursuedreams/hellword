// ------------------------------------------------------------------------------
// name: api
// author: cxx
// created: 2020.07.09
// describe: 封装axios公共的api
// 					 参考：https://blog.csdn.net/weixin_43216105/article/details/98877960
// ------------------------------------------------------------------------------
import http from '../utils/http'

// get请求
export function get(params){
	return http.get(params.url,params.data)
}
// post请求
export function post(params){
	return http.post(params.url,params.data)
}
