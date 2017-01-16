<template lang="html">
    <div class="showcase-container">
        <showcase-content v-if="$store.state.ifProductsLoaded"></showcase-content>
</template>

<script>
import IScroll from 'iscroll';

import { mapMutations } from 'vuex';

import ShowcaseContent from './ShowcaseContent.vue';

export default {
    created() {
        this.setLoading({
            ifLoading: true,
        });
    },
    mounted() {
        this.$store.dispatch('performRawData');
    },
    methods: {
        ...mapMutations([
            'setLoading',
        ]),
    },
    components: {
        ShowcaseContent,
    },
    computed: {

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
