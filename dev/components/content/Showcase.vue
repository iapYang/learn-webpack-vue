<template lang="html">
    <div class="showcase-container">
        <loading v-if="!$store.state.ifProductsLoaded"></loading>
        <showcase-content v-else></showcase-content>
</template>

<script>
import IScroll from 'iscroll';

import Loading from './Loading.vue';
import ShowcaseContent from './ShowcaseContent.vue';

export default {
    created() {
        const p_id = parseInt(this.$route.query.p_id);
        const traits_id = this.$route.query.traits_id;

        traits_id.forEach(trait_id => {
            trait_id = parseInt(trait_id);
        });

        this.$store.commit('changeWho', {
            choice: p_id,
        });

        this.$store.commit('changeTrait', {
            choices: traits_id,
        });
    },
    mounted() {
        this.$store.dispatch('performRawData');
    },
    methods: {

    },
    components: {
        Loading,
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
