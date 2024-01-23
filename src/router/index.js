import { createRouter, createWebHistory } from 'vue-router'
import Loginview from "../views/LoginView.vue"
import Listeconge from "../views/Listeconge.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      mame:"loginview",
      component:Loginview
    },
    {
      path:"/liste-conge",
      mame:"listeconge",
      component:Listeconge
    },
    
   
  ]
})

export default router
