import axios from 'axios'

const service = axios.create({
	// baseUrl:"/"
	baseURL:"https://mock.mengxuegu.com/mock/67e21c33b639ac3adef4c19f/myapp"
})
// 在发送请求之前做些什么
service.interceptors.request.use(function(config){
	return config
}),function(error:any){
	// 对请求错误做些什么
	return Promise.reject(error)
}

// 添加响应拦截器
service.interceptors.response.use(function(response){
	return response
},function(error){
	// 对响应错误做点什么
	return Promise.reject(error)
})
export default service