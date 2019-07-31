import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import store from '../store';
import HomePage from '../views/home/home.vue';
import IncidentType from '../views/incident-type/incident-type.vue';
import FullCalendarTest from '../views/fullcalendar-test/fullcalendar-test.vue';

Vue.use(Router);

export const constantRouterMap: RouteConfig[] = [
  { path: '/incident-type', name: 'Router.incidentType', component: IncidentType },
  { path: '/', name: 'Router.Home', component: HomePage },
  { path: '/fullcalendar-test', name: 'Router.fullCalendarTest', component: FullCalendarTest },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
