import axios from '../index'
export const getRoute = ()=>{
	return axios.get('listMenu')
}