import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RouteNames from '@/enums/route-names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('../views/home.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/page-not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
