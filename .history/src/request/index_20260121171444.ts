import axios from 'axios'

const service = axios.create({
	baseURL:""
})
service.interceptors.request.use(function(config){
	return config
}),function(error){
	return Promise.reject(error)
}