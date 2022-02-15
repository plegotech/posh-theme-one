import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import 'vue3-carousel/dist/carousel.css';

axios.defaults.baseURL="https://posh-marketplace.plego.pro/api/";
//Vue.prototype.$http = axios;
createApp(App).use(router, axios).mount('#app')