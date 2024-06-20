import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


import { router } from './router'

createApp(App).use(router).mount('#app')
