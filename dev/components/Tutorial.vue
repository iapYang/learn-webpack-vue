<style lang="scss">

@import "../styles/mixin.scss";
@import "../styles/reset.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

.tutorial-container {
    /*background-color: red;*/
    width: 100%;
    min-height: 500px;
}

</style>

<template lang="html">

<div class="tutorial-container">
    <navigation></navigation>
    <editor></editor>
    <order></order>
    <search></search>
</div>

</template>

<script>
import Navigation from './tutorial/Navigation.vue';
import Editor from './tutorial/Editor.vue';
import Order from './tutorial/Order.vue';
import Search from './tutorial/Search.vue';

export default {
    components: {
        Navigation,
        Editor,
        Order,
        Search,
    }
}

</script>
