
import Vue from 'vue';

import App from './components/App.vue';

console.log('index.js');

const app = new Vue({
    components: {
        App,
    },
}).$mount('#app');
