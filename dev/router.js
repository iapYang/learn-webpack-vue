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

const routes = [{
    path: '/tutorial',
    name: 'tutorial',
    component: Tutorial,
    children: [{
        path: 'Navigation',
        name: 'tutorial-Navigation',
        component: Navigation,
    }, {
        path: 'Editor',
        name: 'tutorial-Editor',
        component: Editor,
    }, {
        path: 'Order',
        name: 'tutorial-Order',
        component: Order,
    }, {
        path: 'Search',
        name: 'tutorial-Search',
        component: Search,
    }, {
        path: 'FilterImg',
        name: 'tutorial-FilterImg',
        component: FilterImg,
    }],
}];

const router = new VueRouter({
    routes,
});

export default router;
