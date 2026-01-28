import {defineStore } from 'pinia'
import {TabsState} from '@/stores/interface/index'

export const userTabsStore = defineStore({
	id:'tabs',
	state:():TabsState=>({
		tabsMenuList:[]
	})
})