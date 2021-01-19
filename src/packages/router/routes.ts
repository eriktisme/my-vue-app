import Home from "../../views/Home.vue";

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/passport/Login.vue')
  }
]
