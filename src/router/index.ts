import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import HomePage from '../views/home/home.vue';
import IncidentType from '../views/incident-type/incident-type.vue';
import FullCalendarTest from '../views/fullcalendar-test/fullcalendar-test.vue';
import ElementuiTest from '../views/elementui-test/elementui-test.vue';
import ElectronWebviewTest from '../views/electron-webview-test/electron-webview-test.vue';
import FormTest from '../views/form-test/form-test.vue';
import RemTest from '../views/rem-test/rem-test.vue';
import TansitionTest from '../views/transition-test/transition-test.vue';
import DragTest from '../views/drag-test/drag-test.vue';


Vue.use(Router);

export const constantRouterMap: RouteConfig[] = [
  { path: '/incident-type', name: 'Router.incidentType', component: IncidentType },
  { path: '/', name: 'Router.Home', component: HomePage },
  { path: '/fullcalendar-test', name: 'Router.fullCalendarTest', component: FullCalendarTest },
  { path: '/elementui-test', name: 'Router.elementuiTest', component: ElementuiTest },
  { path: '/electron-webview-test', name: 'Router.electronWebviewTest', component: ElectronWebviewTest },
  { path: '/form-test', name: 'Router.formTest', component: FormTest },
  { path: '/rem-test', name: 'Router.remTest', component: RemTest },
  { path: '/tansition-test', name: 'Router.tansitionTest', component: TansitionTest },
  { path: '/drag-test', name: 'Router.dragTest', component: DragTest }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
