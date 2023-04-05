import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)
app.use(router)
app.directive('scroll', (el, binding) => {
  el.style.opacity = binding.value
})
app.mount('#app')