// ------------------------------------------------------------------------------
// name: http
// author: cxx
// created: 2020.07.09
// describe: 导入封装好的axios实例，主要书写几种请求的封装过程
// ------------------------------------------------------------------------------
import request from './request'

const http ={
	/**
	 * methods: 请求
	 * @param url 请求地址
	 * @param params 请求参数
	 */
	get(url,params){
		const config = {
			method: 'get',
			url:url
		};
		if(params) config.params = params
		return request(config)
	},
	post(url,params){
		const config = {
			method: 'post',
			url:url
		};
		if(params) config.data = params
		return request(config)
	}
};

export default http

