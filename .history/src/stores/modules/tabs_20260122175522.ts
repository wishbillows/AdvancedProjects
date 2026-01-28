import {defineStore } from 'pinia'
import {TabsState} from '@/stores/interface/index'
import piniaPersistConfig from "@/stores/helper/persist"

export const userTabsStore = defineStore('tabs',{
	
	state:():TabsState=>({
		tabsMenuList:[]
	}),
	actions:{

	},
	persist: piniaPersistConfig("geeker-tabs")
})