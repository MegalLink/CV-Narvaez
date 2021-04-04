import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from "aos";
import "aos/dist/aos.css";

const app=createApp(App)
app.use(router)
app.AOS = new AOS.init({ disable: "phone" });
createApp(App).use(router).mount('#app')
