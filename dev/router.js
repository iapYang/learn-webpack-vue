import Vue from 'vue';
import VueRouter from 'vue-router';

import Tutorial from './components/Tutorial.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/tutorial',
    name: 'tutorial',
    component: Tutorial,
}];

const router = new VueRouter({
    routes,
});

export default router;
