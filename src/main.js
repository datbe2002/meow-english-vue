import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from './presets/aura'
const app = createApp(App)
app.use(PrimeVue, { unstyled: true, pt: Aura })
app.use(router)
app.mount('#app')
