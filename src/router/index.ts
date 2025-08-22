import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from './routes';

export default route(function () {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: routes as RouteRecordRaw[],
    history: createWebHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
