import Vue from 'vue';

import App from './components/App.vue';
import router from './router.js';
import store from './store.js';

const app = new Vue({
    router,
    components: {
        App,
    },
}).$mount('#app');
