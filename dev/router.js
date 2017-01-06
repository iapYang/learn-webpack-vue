import Vue from 'vue';
import VueRouter from 'vue-router';

import Tutorial from './components/Tutorial.vue';
import Navigation from './components/tutorial/Navigation.vue';
import Editor from './components/tutorial/Editor.vue';
import Order from './components/tutorial/Order.vue';
import Search from './components/tutorial/Search.vue';
import FilterImg from './components/tutorial/FilterImg.vue';


Vue.use(VueRouter);

const User = {
    template: '<div class=\'aaa\'>User {{ $route.params.id }}</div>',
};

console.log(Navigation);

const routes = [{
    path: '/tutorial',
    name: 'tutorial',
    component: Tutorial,
}, {
    path: '/tutorial/Navigation',
    name: 'Navigation',
    component: Navigation,
}, {
    path: '/tutorial/Editor',
    name: 'Editor',
    component: Editor,
}, {
    path: '/tutorial/Order',
    name: 'Order',
    component: Order,
}, {
    path: '/tutorial/Search',
    name: 'Search',
    component: Search,
}, {
    path: '/tutorial/FilterImg',
    name: 'FilterImg',
    component: FilterImg,
}];

const router = new VueRouter({
    routes,
});

export default router;
