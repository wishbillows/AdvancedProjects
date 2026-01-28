import {createPinia} from 'pinia'


const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

export default pinia