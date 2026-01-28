import axios from 'axios'

const service = axios.create({
	baseURL:""
})
service.interceptors.request.use(function(){
	
})