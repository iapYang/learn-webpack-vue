import Vue from 'vue';

import App from '../components/App.vue';
import router from '../router.js';
import store from '../store/index.js';

const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#app');
