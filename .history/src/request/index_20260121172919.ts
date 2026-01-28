import axios from 'axios'

const service = axios.create({
	baseURL:""
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
	return Promise.reject(error)
})
export default service