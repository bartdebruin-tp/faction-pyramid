import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import TextareaComponent from './components/TextareaComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import MindMapComponent from './components/MindMapComponent.vue'

const app = createApp(App)
const pinia = createPinia()

app
  .use(pinia)
  .component('SidebarComponent', SidebarComponent)
  .component('TextareaComponent', TextareaComponent)
  .component('MindMapComponent', MindMapComponent)

app.mount('#app')