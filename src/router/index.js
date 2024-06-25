import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import MainView from '../views/MainView.vue'
import DetailView from '../views/DetailView.vue'


const routes = [
  {
    path: '/',
    redirect: '/auth'
  },
  
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },

  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: { requiresAuth: true }
  },

  {
    path: '/detail',
    name: 'product-detail',
    component: DetailView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authenticated')

  if (to.meta.requiresAuth && isAuthenticated !== 'true') {
    next('/auth');
  } else {
    next();
  }
})

export default router
