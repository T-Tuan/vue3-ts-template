import { type RouteRecordRaw } from 'vue-router';

export enum RouterNameMap {
  Home = 'home',
}

const routerMap: RouteRecordRaw[] = [
  {
    name: RouterNameMap.Home,
    path: '/',
    component: () => import('@/views/Home.vue'),

    children: [],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export default routerMap;
