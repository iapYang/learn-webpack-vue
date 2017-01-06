import Vue from 'vue';

import App from './components/App.vue';
import router from './router.js';

const app = new Vue({
    router,
    components: {
        App,
    },
}).$mount('#app');
