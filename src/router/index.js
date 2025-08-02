import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView}
]

const router = createRouter({
  history: createWebHistory(),
  routes // указываем роутеру какие пути вообще существуют
})

export default router
