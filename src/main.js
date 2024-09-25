import './assets/main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(VueTheMask)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
