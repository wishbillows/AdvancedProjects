import axios from 'axios'

const service = axios.create({
	baseURL:""
})
// 在发送请求之前做些什么
service.interceptors.request.use(function(config){
	return config
}),function(error){
	return Promise.reject(error)
}