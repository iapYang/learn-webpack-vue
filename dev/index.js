// import 'babel-polyfill';

import Vue from 'vue';

// import router from '../router';
// import store from '../store/index';
import App from './components/App.vue';

// import Platform from './plugin/platform.js';

const app = new Vue({
    components: {
        App,
    },
}).$mount('#app');
