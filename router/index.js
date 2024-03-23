import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/ShoppingCart.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/',
    redirect: '/login' // Redirect the root path to the login page
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
