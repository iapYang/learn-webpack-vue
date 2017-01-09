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
import Navigation from './tutorial/Navigation.vue';
import Editor from './tutorial/Editor.vue';
import Order from './tutorial/Order.vue';
import Search from './tutorial/Search.vue';
import FilterImg from './tutorial/FilterImg.vue';

export default {
    components: {
        Home,
        Navigation,
        Editor,
        Order,
        Search,
        FilterImg,
    }
}

</script>
