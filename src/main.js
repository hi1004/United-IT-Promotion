import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap/dist/js/bootstrap.bundle'

createApp(App)
.use(router)
.mount('#app')