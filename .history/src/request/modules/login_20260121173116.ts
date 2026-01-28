import axios from '../index'
export const login = (username,password)=>{
	return axios.post('/login',{
		username,
		password
	})
}