import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TextareaComponent from './components/TextareaComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue';
import OrganizationalChartComponent from './components/OrganizationalChartComponent.vue';
import UpdateOrganizationNodePopupComponent from './components/UpdateOrganizationNodePopupComponent.vue';
import MindMapComponent from './components/MindMapComponent.vue'

const app = createApp(App)

app
  .component('SidebarComponent', SidebarComponent)
  .component('TextareaComponent', TextareaComponent)
  .component('OrganizationalChartComponent', OrganizationalChartComponent)
  .component('UpdateOrganizationNodePopupComponent', UpdateOrganizationNodePopupComponent)
  .component('MindMapComponent', MindMapComponent)
  
app.mount('#app')