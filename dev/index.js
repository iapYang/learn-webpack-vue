
import Vue from 'vue';

import Tutorial from './components/Tutorial.vue';

console.log('index.js');

const tutorial = new Vue({
    components: {
        Tutorial,
    },
}).$mount('#tutorial');
