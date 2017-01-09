<style lang="scss">
// @include font-face("BrownStd-Bold");

.tutorial-container {
    width: 100%;
    min-height: 500px;
}

</style>

<template lang="html">

<div class="tutorial-container">
    <home></home>
    <router-view></router-view>
</div>

</template>

<script>
import Home from './tutorial/Home.vue';

export default {
    components: {
        Home,
    }
}

</script>
