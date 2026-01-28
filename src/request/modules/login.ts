import axios from '../index'
export const login = (username:any ,password:any)=>{
	return axios.post('/login',{
		username,
		password
	})
}