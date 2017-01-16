import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import Tutorial from './components/Tutorial.vue';
import Navigation from './components/tutorial/Navigation.vue';
import Editor from './components/tutorial/Editor.vue';
import Order from './components/tutorial/Order.vue';
import Search from './components/tutorial/Search.vue';
import FilterImg from './components/tutorial/FilterImg.vue';

import Refinery from './components/Refinery.vue';
import Welcome from './components/content/Welcome.vue';
import Who from './components/content/Who.vue';
import Trait from './components/content/Trait.vue';
import Showcase from './components/content/Showcase.vue';

Vue.use(VueRouter);

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
}, {
    path: '',
    component: Refinery,
    children: [{
        path: '',
        name: 'Welcome',
        component: Welcome,
    }, {
        path: 'who',
        name: 'Who',
        component: Who,
    }, {
        path: 'trait',
        name: 'Trait',
        component: Trait,
    }, {
        path: 'showcase',
        name: 'Showcase',
        component: Showcase,
    }],
}];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    store.dispatch('changeGlobal', {
        shown: typeof to.query.p_id !== 'undefined' && typeof to.query.traits_id !== 'undefined',
    });

    store.dispatch('performDefaultData', {
        p_id: to.query.p_id,
        traits_id: to.query.traits_id,
    });

    next();
});

export default router;
