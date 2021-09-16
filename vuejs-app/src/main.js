import { createApp } from 'vue'
import AuthService from "./classes/auth_service";

import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$authService = new AuthService();
app.mount('#app')
