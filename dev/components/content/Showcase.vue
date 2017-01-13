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
