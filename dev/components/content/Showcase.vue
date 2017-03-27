<template lang="html">
    <div class="showcase-container">
        <showcase-content v-if="ifProductsLoaded"></showcase-content>
    </div>
</template>

<script>
import IScroll from 'iscroll';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import ShowcaseContent from './ShowcaseContent.vue';

export default {
    created() {
        this.changeLoading({
            ifLoading: true,
        });
    },
    mounted() {
        this.performRawData();
    },
    methods: {
        ...mapActions([
            'performRawData',
            'changeLoading',
        ]),
    },
    components: {
        ShowcaseContent,
    },
    computed: {
        ...mapGetters({
            ifProductsLoaded: 'getifProductsLoaded',
        }),
    },
}
</script>

<style lang="scss">
#refinery .content-container .showcase-container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
